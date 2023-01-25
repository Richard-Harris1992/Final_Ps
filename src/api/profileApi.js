import axios from 'axios';
const baseURL = 'http://localhost:5000';
// Get current users profile
export const getCurrentProfile = async (id) => {
    try {
        const res = await axios.get(`${ baseURL }/dashboard/${id}`);
        return res;
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



    // Create or update profile
    export const createProfile = async (formData) => {
        console.log('I am here');
        console.log(formData)
        try {
            const response = await axios.post(`${baseURL}/profile`, formData);
            console.log(response, response.data);
            return response.data;
        } catch (err) {
            console.error(err);
            return err.response;
        }
    };

