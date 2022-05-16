
import axios from 'axios';

export const getProjects = async() =>{ 
    const response = await axios.get('/api/projects');
    return response.data.projects;
};

export const postProjects = async(newProject) =>{ 
    const response = await axios.post('/api/projects', newProject);
};