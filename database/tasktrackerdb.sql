CREATE DATABASE "TaskTracker"
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'C'
       LC_CTYPE = 'C'
       CONNECTION LIMIT = -1;
GRANT ALL ON DATABASE "TaskTracker" TO postgres;
REVOKE ALL ON DATABASE "TaskTracker" FROM public;

CREATE SCHEMA public
  AUTHORIZATION postgres;

GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO public;
COMMENT ON SCHEMA public
  IS 'standard public schema';

CREATE SEQUENCE "Client_ClientID_seq"
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 2
  CACHE 1;
ALTER TABLE "Client_ClientID_seq"
  OWNER TO postgres;

CREATE SEQUENCE "Task_TaskID_seq"
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE "Task_TaskID_seq"
  OWNER TO postgres;

 CREATE SEQUENCE "UserTaskEntry_UserTaskEntryID_seq"
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE "UserTaskEntry_UserTaskEntryID_seq"
  OWNER TO postgres;

CREATE SEQUENCE "User_UserID_seq"
  INCREMENT 1
  MINVALUE 1
  MAXVALUE 9223372036854775807
  START 1
  CACHE 1;
ALTER TABLE "User_UserID_seq"
  OWNER TO postgres;

CREATE TABLE "Client"
(
  "Name" character varying(100),
  "ClientID" serial NOT NULL,
  "CreateDate" date NOT NULL DEFAULT ('now'::text)::date,
  "ModifiedDate" date NOT NULL DEFAULT ('now'::text)::date,
  "IsActive" boolean NOT NULL DEFAULT true,
  CONSTRAINT "ClientPK" PRIMARY KEY ("ClientID")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "Client"
  OWNER TO postgres;
GRANT ALL ON TABLE "Client" TO postgres;
GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE "Client" TO public;

CREATE TABLE "Task"
(
  "TaskID" serial NOT NULL,
  "ClientID" integer NOT NULL,
  "Name" character varying(150) NOT NULL,
  "IsActive" boolean NOT NULL DEFAULT true,
  "CreateDate" date NOT NULL DEFAULT ('now'::text)::date,
  "ModifiedDate" date NOT NULL DEFAULT ('now'::text)::date,
  CONSTRAINT "TaskID" PRIMARY KEY ("TaskID"),
  CONSTRAINT "TaskToClientFK" FOREIGN KEY ("ClientID")
      REFERENCES "Client" ("ClientID") MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "Task"
  OWNER TO postgres;
GRANT ALL ON TABLE "Task" TO postgres;
GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE "Task" TO public;

CREATE INDEX "fki_TaskToClientFK"
  ON "Task"
  USING btree
  ("ClientID");

CREATE TABLE "User"
(
  "UserID" serial NOT NULL,
  "FirstName" character varying(50) NOT NULL,
  "LastName" character varying(50),
  "IsActive" boolean NOT NULL DEFAULT true,
  CONSTRAINT "UserPK" PRIMARY KEY ("UserID")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "User"
  OWNER TO postgres;
GRANT ALL ON TABLE "User" TO postgres;
GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE "User" TO public;


CREATE TABLE "UserTaskEntry"
(
  "UserTaskEntryID" serial NOT NULL,
  "UserID" integer NOT NULL,
  "TaskID" integer NOT NULL,
  "EndTime" timestamp without time zone,
  "EntryDate" date NOT NULL DEFAULT ('now'::text)::date,
  "StartTime" timestamp without time zone,
  CONSTRAINT "UserTaskEntryPK" PRIMARY KEY ("UserTaskEntryID"),
  CONSTRAINT "TaskUserEntryToTaskFK" FOREIGN KEY ("TaskID")
      REFERENCES "Task" ("TaskID") MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION,
  CONSTRAINT "TaskUserEntryToUser" FOREIGN KEY ("UserID")
      REFERENCES "User" ("UserID") MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "UserTaskEntry"
  OWNER TO postgres;
GRANT ALL ON TABLE "UserTaskEntry" TO postgres;
GRANT SELECT, UPDATE, INSERT, DELETE ON TABLE "UserTaskEntry" TO public;

