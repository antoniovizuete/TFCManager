
export class User{
    constructor(id, name, email, password, role, state){
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.state = state
    };

    getId(){
        return $this.id;
    };

    setId(){
        return $this.id;
    };

    getName(){
        return $this.name;
    };

    setName(){
        return $this.name;
    };

    getEmail(){
        return $this.email;
    };

    setEmail(){
        return $this.email;
    };

    getPassword(){
        return $this.password;
    };

    setPassword(){
        return $this.password;
    };

    getRole(){
        return $this.role;
    };

    setRole(){
        return $this.role;
    };

    getState(){
        return $this.state;
    };

    setState(){
        return $this.state;
    };

}

// const {Schema, model } = require('mongoose');

// const UserSchema = Schema({
//     name: {
//         type: String,
//         required: [ true, 'El nombre es obligatorio']
//     },

//     email:{
//         type: String,
//         required: [ true, 'El email es obligatorio'],
//         unique: true
//     },
//     password: {
//         type: String,
//         required: [ true, 'El password es obligatorio']
//     },
//     img: {
//         type: String,
//     },
//     role: {
//         type: String,
//         required: true ,
//         enum: ['Administrador', 'Empleado']
//     },
//     state: {
//         type: Boolean,
//         default: true
//     },
//     google: {
//         type: Boolean,
//         default: false
//     },
// });

// UserSchema.methods.toJSON = function(){ //quitar la contraseña y la versión de la respuesta de la api
//     const {__v, password, _id, ...user } = this.toObject();
//     user.uid = _id;
//     return user;
// }

// module.exports = model('User', UserSchema);
