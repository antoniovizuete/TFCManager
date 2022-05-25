
import axios from 'axios';
import { authHeader } from './authHeader.services';

export const getWorkorders = async() =>{ 
    const response = await axios.get('/api/workorders', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.workorders;
};

export const getWorkorderById = async(id)=>{
    const response = await axios.post(`/api/workorders/${id}`, id, {headers: {Authorization: 'Bearer ' + await authHeader()}})
    return response.data.workorder;
}

export const postWorkorders = async(newWorkorder) =>{ 
   await axios.post('/api/workorders', newWorkorder, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};

export const deleteWorkorders = async(id)=>{
    await axios.delete(`/api/workorders/${id}`, {headers: {Authorization: 'Bearer ' + await authHeader()}})
}

export const updateWorkorders = async(id, editedWorkorder) =>{ 
    await axios.put(`/api/workorders/${id}`, editedWorkorder, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};
