
const { dbQuery, dbQueryCount } = require('../database/config.db');
const { response } = require('express');
const bcryptjs = require('bcryptjs');

const { generateJWT } = require('../helpers/generateJWT');

const loginController = async(req, res = response) => {

    const { email, password } = req.body;

    try{

        //Verificar si email existe.
        
        const sql = 'SELECT * FROM users INNER JOIN roles ON users.user_role = roles.role_id WHERE user_state=true LIMIT ? OFFSET ?';
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({
                mssg: 'El usuario o el password no son correctos (email)'
            })
        }
        //Verificar si usuario está activo.
        if(!user.state){
            return res.status(400).json({
                mssg: 'El usuario o el password no son correctos (state:false)'
            })
        }

        //Verificar password.
        const validPassword = bcryptjs.compareSync(password, user.password);
        if(!validPassword){
            return res.status(400).json({
                mssg: 'El usuario o el password no son correctos (password)'
            })
        };

        //Generar el JasonWebToken (JWT).
        const token = await generateJWT(user.id);

        res.json({
            user, 
            token
        })

    }catch(error){

        console.log(error);
        res.status(500).json({
            mssg: 'Imposible logear. Hable con el administrador.'
        });
    }
}

module.exports = {
    loginController
}
