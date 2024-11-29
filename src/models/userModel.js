const { Sequelize, DataTypes } = require('sequelize');
const config = require('../../config/config');
const sequelize = new Sequelize(config.db);

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;
