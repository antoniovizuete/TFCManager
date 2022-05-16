
import axios from 'axios';

export const getMaterials = async() =>{ 
    const response = await axios.get('/api/materials');
    return response.data.materials;
};

export const postMaterials = async(newMaterial) =>{ 
    const response = await axios.post('/api/materials', newMaterial);
};
