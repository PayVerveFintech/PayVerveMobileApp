import api from './interceptor';
import axios from 'axios';
import { apiUrl } from '../../expo-constants';

const fetchData = async (endpoint) => {
    try {
        const response = await api.get(`/${endpoint}`);
        console.log('Data:', response.data);
        return response.data
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
};

const postData = async (endpoint, payload) => {
    try {
        const response = await api.post(url=`/${endpoint}`,data=payload);
        console.log('Data:', response.data);
    } catch (error) {
        console.error('Error:', error);
    }
};
// fetchData();

//send user details on sign up
export const signUp = async (email, password, first_name, last_name) => {

    let payload = {
        email: email,
        password: password,
        first_name: first_name,
        last_name: last_name
    };

    let res = await axios.post(apiUrl + '/api/v1/auth/sign-up/', payload);

    let data = res.data;
    console.log(data);
}

//send user details on login
export const signIn = async (email, password) => {

    let payload = {
        email: email,
        password: password
    };

    let res = await axios.post(apiUrl + '/api/v1/users/auth/sign-in/', payload);

    let data = res.data;
    console.log(data);
    return data;
}

//send user details to reset password
export const resetPassword = async (email, password) => {

    let payload = {
        email: email,
        password: password
    };

    let res = await axios.post(apiUrl + '/api/v1/auth/reset-password/', payload);

    let data = res.data;
    console.log(data);
}

//retrieve single user details
export const getSingleUser = async (id) => {

    let res = await axios.get(apiUrl + `/api/v1/users/auth/user/${id}/`)

    console.log(res.data)
    return res.data
}

//update user details
export const updateUserDetails = async (first_name, last_name) => {

    let payload = {
        first_name: first_name,
        last_name: last_name
    };

    let res = await axios.patch(apiUrl + `/api/v1/users/auth/user/${id}/` + payload);

    let data = res.data;
    console.log(data)
}

//delete user details
export const deleteUserDetails = async () => {

    let res = await axios.delete(apiUrl + `/api/v1/users/auth/user/${id}/`);

    console.log(res.datadata)
    return res.data
}

