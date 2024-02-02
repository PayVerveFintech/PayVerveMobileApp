import api from './interceptor';
// import axios from 'axios'
import { apiUrl } from '../../expo-constants';

const fetchData = async () => {
  try {
    const response = await api.get('/endpoint');
    console.log('Data:', response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};

fetchData();

export const signUp = async (email, password, first_name, last_name) => {

    let payload = { 
        email: email, 
        password: password,
        first_name: first_name,
        last_name: last_name
    };

    let res = await axios.post(apiUrl+'/api/v1/auth/sign-up/', payload);

    let data = res.data;
    console.log(data);
}

export const signIn = async (email, password) => {

    let payload = { 
        email: email, 
        password: password
    };

    let res = await axios.post(apiUrl+'/api/v1/auth/sign-in/', payload);

    let data = res.data;
    console.log(data);
}

export const resetPassword = async (email, password) => {

    let payload = { 
        email: email, 
        password: password
    };

    let res = await axios.post(apiUrl+'/api/v1/auth/reset-password/', payload);

    let data = res.data;
    console.log(data);
}