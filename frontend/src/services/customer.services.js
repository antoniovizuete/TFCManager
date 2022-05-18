
import axios from 'axios';
import { authHeader } from './authHeader.services';

export const getCustomers = async() =>{
    const response = await axios.get('/api/customers', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.customers;
};

export const postCustomers = async(newCustomer) =>{ 
    const response = await axios.post('/api/customers', newCustomer, {headers: {Authorization: 'Bearer ' + await authHeader()}});
};
