
const {Schema, model } = require('mongoose');

const workordersSchema = new Schema({
    workorder_author: {
        Type:String,
        required: [true, 'El autor del parte del trabajo es requerido.']
    },
    workorder_project: {
        Type:String,
        required: [true, 'El parte de trabajo debe pertenecer a un proyecto.']
    },
    workorder_date: {
        Type:String,
        required: [true, 'La fecha de creación del parte de trabajo es requerida.']
    },
    workorder_hours: {
        Type:Number
    },
    workorder_minutes: {
        Type:Number
    },
    workorder_state: {
        Type:Boolean
    }
});

workordersSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id=returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Workorders = model('Workorder', workordersSchema);

module.exports = Workorders;
