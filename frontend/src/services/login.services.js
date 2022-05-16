
import axios from 'axios';

export const getCheckUser = async() =>{ 
    const response = await axios.get('/api/login');
    return response.data.checkUser;
};
