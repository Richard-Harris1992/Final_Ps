import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const createUser = async ( user ) => {
    try {
        const response = await axios.post(`${baseURL}/signup`, user);
        return response;
      } catch (err) {
        console.log(err);
      }
}

export const loginUser = async ( {email, password} ) => {
    try {
        const response = await axios.post(`${baseURL}/login`, { email, password });
        return response;
    } catch (error) {
        alert('Invalid credentials');
    }
}
