
import axios from 'axios';
import { authHeader } from './authHeader.services';

export const getMaterials = async() =>{ 
    const response = await axios.get('/api/materials', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.materials;
};

export const getMaterialsById = async(id) =>{
    const response = await axios.post(`/api/materials/${id}`, id, {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.material;
};

export const deleteMaterials = async(id) => {
    await axios.delete(`/api/materials/${id}`, {headers: {Authorization: 'Bearer ' + await authHeader()}})
}

export const postMaterials = async(newMaterial) =>{ 
    const response = await axios.post('/api/materials', newMaterial, {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.headers['Authorization'];
};

export const updateMaterials = async(id, editedMaterial) =>{ 
    await axios.put(`/api/materials/${id}`, editedMaterial, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};
