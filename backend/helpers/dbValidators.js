
const { dbQueryExists } = require('../database/config.db');

const validRole = async(role = '') => {

    const sql ='SELECT role from roles WHERE role = ?';
    const roleExists = await dbQueryExists(sql, [role]);

    if(!roleExists){
        throw new Error(`El rol ${role} no está registrado en la base de datos.`);
    }
};

const validCustomerEmail = async(email='') => {
    const sql ='SELECT email from customers WHERE email = ?';
    const emailExists = await dbQueryExists(sql, [email]);
    if(emailExists){
        throw new Error(`El correo ${email} ya fue registrado.`);
    };

};

const validUserEmail = async(email = '') => {

    const sql ='SELECT email from users WHERE email = ?';
    const emailExists = await dbQueryExists(sql, [email]);
    if(emailExists){
        throw new Error(`El correo ${email} ya fue registrado.`);
    };
};

const validUserId = async(id) => {
    const sql ='SELECT id from users WHERE id = ?';
    const userIdExists = await dbQueryExists(sql, [id]);
    if(!userIdExists){
        throw new Error(`No existe ningún usuario con el ID: ${id}.`);
    };
};

const validPhone = async(phone) => {
    if(!(/^[0-9]{9}$/.test(phone))){
        throw new Error(`El formato del teléfono ${phone} es erróneo`)
    }
}

module.exports = {
    validRole, validUserEmail, validUserId, validCustomerEmail, validPhone
}
