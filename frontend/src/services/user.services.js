
import axios from 'axios';
import { authHeader } from './authHeader.services';

export const getUsers = async() =>{ 
    const response = await axios.get('/api/users', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.users;
};

export const postUsers = async(newUser) =>{ 
    const response = await axios.post('/api/users', newUser, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};
