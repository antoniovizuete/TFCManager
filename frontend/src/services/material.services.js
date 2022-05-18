
import axios from 'axios';
import { authHeader } from './authHeader.services';

export const getMaterials = async() =>{ 
    const response = await axios.get('/api/materials', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.materials;
};

export const postMaterials = async(newMaterial) =>{ 
    const response = await axios.post('/api/materials', newMaterial, {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.headers['Authorization'];
};