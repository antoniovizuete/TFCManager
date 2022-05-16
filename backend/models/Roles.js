
const {Schema, model } = require('mongoose');

const rolesSchema = new Schema({
   role: {
        type:String
    } 
});

rolesSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id=returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Roles = model('Role', rolesSchema);

module.exports = Roles;
