
const {Schema, model } = require('mongoose');

const projectsSchema = new Schema({
    project_name: {
        Type:String,
        required: [true, 'El nombre del proyecto es requerido.']
    },
    project_author: {
        Type:String,
        required: [true, 'El autor de proyecto es requerido.']
    },
    project_customer: {
        Type:String,
        required: [true, 'El cliente del proyecto es requerido.']
    },
    project_description: {
        Type:String
    },
    project_date: {
        Type:String
    },
    project_state: {
        Type:Boolean
    }
});

projectsSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id=returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
});

const Projects = model('Project', projectsSchema);

module.exports = Projects;
