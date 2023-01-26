import axios from 'axios';
import { baseURL } from './url';





// Get current users profile
export const getCurrentProfile = async (id) => {
    try {
        const response = await axios.get(`${ baseURL }/dashboard/${id}`);
        return response;
    } catch (err) {
        console.error(err);
        return err.response;
    }
};

    // Get all profiles
    export const getProfiles = async () => {
        try {
            const res = await axios.get(`${baseURL}/api/profile`);
            return res.data;
        } catch (err) {
            console.error(err);
            return err.response;
        }
    };

    // Get profile by ID
    export const getProfileById = async (userId) => {
        try {
            const res = await axios.get(`${baseURL}/api/profile/user/${userId}`);
            return res.data;
        } catch (err) {
            console.error(err);
            return err.response;
        }
    };



    // Create profile
    export const createProfile = async (data) => {
        try {
            const response = await axios.post(`${baseURL}/create-profile`, data);
            console.log(response)
            return response;
        } catch (err) {
            return err.response;
        }
    };

// Edit profile 
export const editProfile = async (id,data) => {
    try {
        console.log('Made it');
        const response = await axios.put(`${baseURL}/dashboard/${id}`, data)
        return response;
    } catch (err) {
        return err.response;
    }
}


