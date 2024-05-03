import axios from 'axios';
import { apiUrl } from '../../expo-constants';

const api = axios.create({
  baseURL: apiUrl,
});

// Add a request interceptor to attach the authentication token
api.interceptors.request.use(
  async (config) => {
    // You might want to fetch the token from AsyncStorage or other storage
    // const token = 'your_auth_token'; // default auth code
    const token = AsyncStorage


    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
