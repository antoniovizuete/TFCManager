
import axios from 'axios';

export const getCustomers = async() =>{
    const response = await axios.get('/api/customers');
    return response.data.customers;
};
