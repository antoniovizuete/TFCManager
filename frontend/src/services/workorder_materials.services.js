
import axios from 'axios';
import { authHeader } from './authHeader.services';

export const getWorkorders_materials = async() =>{ 
    const response = await axios.get('/api/workorders_materials', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.workorders_material;
};

export const postWorkorders_materials = async(newWorkorder_material) =>{ 
    const response = await axios.post('/api/workorders_materials', newWorkorder_material, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};
