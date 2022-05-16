
const {Schema, model } = require('mongoose');

const materialsSchema = new Schema({
    material_reference: {
        Type:String,
        required: [true, 'La referencia de producto es requerida.']
    },
    material_brand: {
        Type:String,
        required: [true, 'La marca de producto es requerida.']
    },
    material_description: {
        Type:String
    },
    material_pvp: {
        Type:String,
        required: [true, 'El precio del producto es requerido.']
    },
    material_ecotax: {
        Type:Boolean
    },
    material_state: {
        Type:Boolean
    }
});

materialsSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id=returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Materials = model('Material', materialsSchema);

module.exports = Materials;
