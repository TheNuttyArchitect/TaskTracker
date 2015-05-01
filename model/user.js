var Sequelize = require('sequelize');
module.exports = Sequelize.define('User', {
    userID: {
        type: DataTypes.INTEGER,
        field: 'UserID'
    },
    firstName: {
       type: DataTypes.STRING(50),
       field: 'FirstName'
    },
    lastName: {
        type: DataTypes.STRING(50),
        field: 'LastName'
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        field: 'IsActive'
    }
});