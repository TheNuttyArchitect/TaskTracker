var Sequelize = require('sequelize');
var sequelize = new Sequelize ('TaskTracker', 'tasktracker', 'track1+now', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .complete(function(err){
       if(err){
           console.log('Unable to connect to the database:',err);
       } else{
           console.log('Successfully connected');
       }
    });



module.exports = sequelize;

