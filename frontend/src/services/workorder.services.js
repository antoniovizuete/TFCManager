
import axios from 'axios';
import { authHeader } from './authHeader.services';

export const getWorkorders = async() =>{ 
    const response = await axios.get('/api/workorders', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.workorders;
};

export const postWorkorders = async(newWorkorder) =>{ 
    const response = await axios.post('/api/workorders', newWorkorder, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};
