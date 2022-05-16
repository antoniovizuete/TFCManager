
import axios from 'axios';

export const getWorkorders = async() =>{ 
    const response = await axios.get('/api/workorders');
    return response.data.workorders;
};

export const postWorkorders = async(newWorkorder) =>{ 
    const response = await axios.post('/api/workorders', newWorkorder);
};
