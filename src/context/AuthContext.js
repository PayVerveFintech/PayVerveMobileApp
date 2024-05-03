// AuthContext.js

import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

import { apiUrl } from '../../expo-constants';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        token: null,
        userData: null,
        isLoading: false,
        error: null,
    });

    const login = async (username, password) => {
        setAuthState(prevState => ({ ...prevState, isLoading: true, error: null }));

        let url = apiUrl + '/api/v1/users/auth/sign-in/';
        // console.log("URL: "+url);
        // let payload = {
        //     email: username,
        //     password: password
        // };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            // const response = await axios.post(apiUrl + '/api/v1/users/auth/sign-in/', payload);

            const data = await response.json();

            if (response.ok) {
                setAuthState({
                    token: data.token,
                    userData: data.userData,
                    isLoading: false,
                    error: null,
                });
                navigation.navigate('AppHome');
            } else {
                throw new Error(data.message || 'Unable to login');
            }
        } catch (error) {
            setAuthState(prevState => ({
                ...prevState,
                isLoading: false,
                error: error.message,
            }));            
            navigation.navigate('Login');
        }
    };

    const logout = () => {
        setAuthState({
            token: null,
            userData: null,
            isLoading: false,
            error: null,
        });        
        navigation.navigate('Login');
    };

    const signup = async (email, first_name, userName, password) => {
        let url = apiUrl + '/api/v1/users/auth/sign-up/';
        // let payload = { email:email, first_name:fullName, last_name:userName, password:password };
        // console.log('Payload: '+ payload);
        setAuthState(prevState => ({ ...prevState, isLoading: true, error: null }));
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, password }),
            });
            const data = await response.json();
            console.log(response.status);
            if (response.ok) {
                // Optionally auto-login the user after signup
                login(username, password);
            } else {
                setAuthState(prevState => ({ ...prevState, isLoading: true, error: null }));
                // console.log(data.message);
                throw new Error(data.message || 'Unable to signup');
            }
        } catch (error) {
            console.log(error.message);
            setAuthState(prevState => ({
                ...prevState,
                isLoading: false,
                error: error.message,
            }));
        }
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};
