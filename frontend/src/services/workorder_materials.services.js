
import axios from 'axios';

export const getWorkorders_materials = async() =>{ 
    const response = await axios.get('/api/workorders_materials');
    return response.data.workorders_material;
};

export const postWorkorders_materials = async(newWorkorder_material) =>{ 
    const response = await axios.post('/api/workorders_materials', newWorkorder_material);
};
