var Sequelize = require('sequelize');
module.exports = Sequelize.define('Task', {
    taskID: {
        type: DataTypes.INTEGER,
        field: 'TaskID'
    },
    clientID: {
        type: DataTypes.INTEGER,
        field: 'ClientID'
    },
    name: {
        type: DataTypes.STRING(150),
        field: 'Name'
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        field: 'IsActive'
    },
    createdDate: {
        type: DataTypes.DATE,
        field: 'CreateDate'
    },
    modifiedDate: {
        type: DataTypes.DATE,
        field: 'ModifiedDate'
    }
});
