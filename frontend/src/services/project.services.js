
import axios from 'axios';
import { authHeader } from './authHeader.services';

export const getProjects = async() =>{ 
    const response = await axios.get('/api/projects', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.users;
};

export const getProjectsByCustomer = async(id) =>{
    const response = await axios.post(`/api/customers/${id}/projects`, id, {headers: {Authorization: 'Bearer ' + await authHeader()}})
    return response.data.projects;
    
}

export const getProjectsByUser = async(id) =>{
    const response = await axios.post(`/api/users/${id}/projects`, id, {headers: {Authorization: 'Bearer ' + await authHeader()}})
    return response.data.projects;
    
}

export const getProjectById = async(id)=>{
    const response = await axios.post(`/api/projects/${id}`, id, {headers: {Authorization: 'Bearer ' + await authHeader()}})
    return response.data.project;
}

export const deleteProjects = async(id)=>{
    await axios.delete(`/api/projects/${id}`, {headers: {Authorization: 'Bearer ' + await authHeader()}})
}

export const postProjects = async(newProject) =>{ 
    await axios.post('/api/projects', newProject, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};

export const updateProjects = async(id, editedProject) =>{ 
    await axios.put(`/api/projects/${id}`, editedProject, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};
