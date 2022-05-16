
const {Schema, model } = require('mongoose');

const customersSchema = new Schema({
    customer_name: {
        Type:String,
        required: [true, 'El nombre de cliente es requerido']
    },
    customer_email: {
        Type:String,
        required: [true, 'El email es requerido']
    },
    customer_address: {
        Type:String
    },
    customer_city: {
        Type:String
    },
    customer_province: {
        Type:String
    },
    customer_cp: {
        Type:String
    },
    customer_phone: {
        Type:String,
        required: [true, 'El teléfono es requerido']
    },
    customer_state: {
        Type:Boolean
    }, 
});

customersSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id=returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Customers = model('Customer', customersSchema);

module.exports = Customers;
