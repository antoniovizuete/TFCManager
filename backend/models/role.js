
// import { Sequelize, Model, DataTypes } from 'sequelize';

// const sequelize = new Sequelize('sqlite::memory:');
// const Role = sequelize.define('Role', {
//   role: DataTypes.STRING
// });

// module.export = Role;

const {Schema, model} = require('mongoose');

const RoleSchema = Schema({
    role: {
        type: String,
        required: [true, 'El rol es obligatorio.']
    }
});

module.exports = model('Role', RoleSchema);
