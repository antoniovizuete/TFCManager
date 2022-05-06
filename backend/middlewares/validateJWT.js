
const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validateJWT = async(req = request, res = response, next) =>{

    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            mssg: 'No se encuentra el x-token'
        })
    }

    try{

        const { uid } = jwt.verify(token, process.env.SECRETKEY);

        //leer el usuario que corresponde al uid
        const user = await User.findById(uid);

        //verificar que el usuario esté en la Base de datos.
        if(!user){
            return res.status(401).json({
                mssg: 'Token no válido. - usuario no está en la BD'
            })
        }

        //verificar si el uid está activo
        if(!user.state){
            return res.status(401).json({
                mssg: 'Token no válido. - usuario state:false'
            })
        }

       
        req.user = user;
        next();

    }catch(error){
        console.log(error);
        res.status(401).json({
            mssg: 'x-token no válido.'
        })
    } 
}

module.exports = {
    validateJWT
}
