
const { DataTypes } = require('sequelize');
const { getDbConnection } = require('../database/config.db');

const sequelize = getDbConnection();

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  role: DataTypes.STRING,
  state: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
});

module.export = User;
