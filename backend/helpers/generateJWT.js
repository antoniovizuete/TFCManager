
const jwt = require('jsonwebtoken');

const generateJWT= (uid = '') =>{

    return new Promise( (resolve, reject) =>{

        const payload = { uid };

        jwt.sign(payload, process.env.SECRETKEY, {expiresIn: '1d'}, (err, token) =>{

            if(err){
                console.log(err);
                reject('No se pudo generar el toekn');
            }else{
                resolve(token);
            }
        } );

    });

}

module.exports = {
    generateJWT
}
