const { response, request } = require("express");

const isAdminRole = (req = request, res = response, next) => {

    if(!req.user){
        return res.status(500).json({
            mssg: 'Intento de validar el rol sin validar el token'
        });
    };

    const { role, name } = req.user;

    if(role !== 'Administrador'){
        return res.status(401).json({
            mssg: `${name} no es administrador del sistema.`
        });
    };

    next();
};

const hasRole = ( ...roles ) => {

    return (req = request, res = response, next) => {

        if(!req.user){
            return res.status(500).json({
                mssg: 'Intento de validar el rol sin validar el token'
            });
        };

        if(!roles.includes(req.user.role)){
            return res.status(401).json({
                mssg: `El servicio requiere uno de los siguientes roles: ${roles}`
            })
        }

        next();
    }

}

module.exports = {
    isAdminRole,
    hasRole
}
