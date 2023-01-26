import { baseURL } from './url';
import axios from 'axios';



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
    return response
  }
  
