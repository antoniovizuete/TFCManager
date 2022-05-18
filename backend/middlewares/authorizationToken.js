const { request, response } = require('express');
const jwt = require('jsonwebtoken');

const authorizationToken = async(req, res, next) =>{

    const authorization = req.get('Authorization');
    let token='';
    // console.log(authorization);

    if(authorization && authorization.toLocaleLowerCase().startsWith('bearer')){
        token = authorization.substring(7)
    }

    // console.log(token);

    let decodedToken = {}
    try{
        decodedToken = jwt.verify(token, process.env.SECRETKEY);
        // console.log(decodedToken);
    }catch{}

    if(!token || !decodedToken.id){
        return res.status(401).json({error: 'Token perdido o inválido.'})
    }

    const {id: user_id} = decodedToken;

    req.user_id = user_id;
    
    next();
}

module.exports = {
    authorizationToken
}
