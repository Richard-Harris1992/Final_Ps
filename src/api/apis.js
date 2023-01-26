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

  
