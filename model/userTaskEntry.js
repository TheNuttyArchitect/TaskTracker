var Sequelize = require('sequelize');
module.exports = Sequelize.define('UserTaskEntry', {
   userTaskEntryID: {
       type: DataTypes.INTEGER,
       field: 'UserTaskEntryID'
   },
    userID: {
        type: DataTypes.INTEGER,
        field: 'UserID'
    },
    taskID: {
        type: DataTypes.INTEGER,
        field: 'TaskID'
    },
    entryDate: {
        type: DataTypes.DATEONLY,
        field: 'EntryDate'
    },
    startTime: {
        type: DataTypes.TIME,
        field: 'startTime'
    },
    endTime: {
        type: DataTypes.TIME,
        field: 'endTime'
    }
});
