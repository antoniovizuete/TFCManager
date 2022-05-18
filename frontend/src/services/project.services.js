
import axios from 'axios';
import { authHeader } from './authHeader.services';

export const getProjects = async() =>{ 
    const response = await axios.get('/api/projects', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.users;
};

export const postProjects = async(newProject) =>{ 
    const response = await axios.post('/api/projects', newProject, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};