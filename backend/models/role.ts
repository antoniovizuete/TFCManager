
import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory:');
const Role = sequelize.define('Role', {
  role: DataTypes.STRING
});

module.export = Role;
