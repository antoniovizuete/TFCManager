
import axios from 'axios';

export const getCustomers = async() =>{
    const response = await axios.get('/api/customers');
    return response.data.customers;
};

export const postCustomers = async(newCustomer) =>{ 
    const response = await axios.post('/api/customers', newCustomer);
};
