
import axios from 'axios';

export const getUsers = async() =>{ 
    const response = await axios.get('/api/users');
    return response.data.users;
};

export const postUsers = async(newUser) =>{ 
    console.log(newUser);   
    const response = await axios.post('/api/users', newUser);
};
