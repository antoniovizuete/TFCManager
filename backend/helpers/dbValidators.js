
const Role = require('../models/role');
const User = require('../models/user');

const validRole = async(role = '') => {

    const roleExists = await Role.findOne({role});
    if(!roleExists){
        throw new Error(`El rol ${role} no está registrado en la base de datos.`);
    }
};

const validEmail = async(email = '') => {
    const emailExists = await User.findOne({email});
    if(emailExists){
        throw new Error(`El correo ${email} ya fue registrado.`);
    };
};

const validUserId = async(id) => {
    const userIdExists = await User.findById(id);
    if(!userIdExists){
        throw new Error(`No existe ningún usuario con el ID: ${id}.`);
    };
};

module.exports = {
    validRole, validEmail, validUserId
}
