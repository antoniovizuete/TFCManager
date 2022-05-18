
import axios from 'axios';

export const userLogin = async(user_email, user_password) =>{ 
    const response = await axios.post('/api/auth', {user_email, user_password});
    console.log(response)
    if(response.data.token){
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

export const getUserData = () => {
    return JSON.parse(localStorage.getItem("user"));
}