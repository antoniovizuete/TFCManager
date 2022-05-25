
import axios from 'axios';
import { authHeader } from './authHeader.services';


export const getCustomers = async() =>{
    const response = await axios.get('/api/customers', {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.customers;
};

export const getCustomersById = async(id) =>{
    const response = await axios.post(`/api/customers/${id}`, id, {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data.customer;
};

export const postCustomers = async(newCustomer) =>{
    try{
        const response = await axios.post('/api/customers', newCustomer, {headers: {Authorization: 'Bearer ' + await authHeader()}});
        return response.data;
    }catch(error){
        return error.response.data
    }
};

export const deleteCustomers = async(id) => {
    const response = await axios.delete(`/api/customers/${id}`, {headers: {Authorization: 'Bearer ' + await authHeader()}});
    return response.data;
}

export const updateCustomers = async(id, editedCustomer) =>{ 
    try{
        const response = await axios.put(`/api/customers/${id}`, editedCustomer, {headers: {Authorization: 'Bearer ' + await authHeader()}});
        return response.data;
    }catch(error){
        return error.response.data
    }
};
