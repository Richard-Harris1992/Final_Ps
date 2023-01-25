
import axios from 'axios';
const baseURL = 'http://localhost:5000';


// Show all
export const createUser = (user) => {
    const URL = `${baseURL}/signup`;
    const response = axios.post(URL, user);
    return response;
}

export const login = async (credentials) => {
    const URL = `${baseURL}/login`;
    const response = axios.post(URL, credentials);

    return response   
}
export const getCurrentProfile = (data) => {
    const URL = `${baseURL}/dashboard/:id`;
    const response = axios.get(URL, data);
    console.log(response);
    console.log(response.data);
    return response
  }
  
