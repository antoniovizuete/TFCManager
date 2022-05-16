
const {Schema, model } = require('mongoose');

const usersSchema = new Schema({
    user_name: String,
    user_email: String,
    user_password:String,
    user_role:String,
    user_state:Boolean 
});

usersSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id=returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Users = model('User', usersSchema);

module.exports = Users;
