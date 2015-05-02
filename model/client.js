var Sequelize = require('../config/db'),
    DataTypes = require('sequelize');

module.exports = Sequelize.define('Client', {
        id: {
            type: DataTypes.INTEGER,
            field: 'ClientID'
        },
        name: {
            type: DataTypes.STRING(100),
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
    },
    {
        timestamps: false,
        tableName: 'Client'
    }
);