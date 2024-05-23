// AuthContext.js

import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

import { apiUrl } from '../../expo-constants';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AuthContext = createContext();

const initialState = {
    token: '', userData: {}, isLoading: false, error: '',
}

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [authState, setAuthState] = useState(initialState);

    const navigation = useNavigation();

    const login = async (username, password) => {
        setAuthState({ ...authState, isLoading: true });

        let payload = {
            email: username, password: password
        };

        try {
            const response = await axios.post(apiUrl + '/api/v1/users/auth/sign-in/', payload);

            const data = await response.data.data;
            console.log('Response: ' + data.user_data.email);

            if (response.status === 200) {
                setAuthState({
                    ...authState, token: data.firebase_access_token, userData: data.user_data, isLoading: false,
                });
                console.log('Logged in... Token: ' + authState.token);
                Alert.alert('Logged in successfully!')
                navigation.navigate('AppHome');
            }
        } catch (error) {
            setAuthState({
                ...authState, error: error.message,
            });
            console.error(error.message)
            navigation.navigate('Login');
        } finally {
            setAuthState({
                ...authState, isLoading: false,
            });
        }
    };

    const logout = () => {
        setAuthState({
            token: null, userData: null, isLoading: false, error: null,
        });
        navigation.navigate('Login');
    };

    const signup = async (email, first_name, last_name, password) => {
        let url = apiUrl + '/api/v1/users/auth/sign-up/';
        let payload = { email: email, first_name: first_name, last_name: last_name, password: password };
        // let payload = JSON.stringify(email,first_name,last_name,password);
        // payload = JSON.stringify(payload);
        console.log('Payload: ' + payload);
        setAuthState({ ...authState, isLoading: true });
        try {
            const response = await axios.post(apiUrl + '/api/v1/users/auth/sign-up/', payload);
            const data = await response.data.data;
            console.log('ResponseStatus: ' + response.status);
            if (response.status === 201) {
                Alert.alert('Signup successful!');
                // Optionally auto-login the user after signup
                await login(email, password);
            }
        } catch (error) {
            console.log('Error: ' + error.message);
            Alert.alert(error.message);
            setAuthState({
                ...authState, error: error.message,
            });
        } finally {
            setAuthState({
                ...authState, isLoading: false
            });
        }
    };

    const forgotPassword = async (email) => {

        setAuthState({ ...authState, isLoading: true });

        try {
            console.log("Reset passwrod init...");
            const response = await axios.post(apiUrl + '/api/v1/users/auth/reset-password/', JSON.stringify({ email }));
            const data = await response.json();
            console.log("Response received: " + data);
            // if (response.ok) {
            Alert.alert('Password reset successfully!')
            // }
            // return true;
        } catch (error) {
            console.log("Error occured. NOK!!");
            Alert.alert(error.message);
            setAuthState({
                ...authState, error: error.message,
            });
        } finally {
            setAuthState({
                ...authState, isLoading: false,
            });
        }
    };

    const changePassword = async (password) => {

        setAuthState({ ...authState, isLoading: true });

        try {
            console.log("Change password init...");
            const response = await axios.post(apiUrl + '/api/v1/users/auth/change-password/', JSON.stringify({ password }));
            const data = await response.json();
            console.log("Response received: " + data);
            // if (response.ok) {
            Alert.alert('Password change successfully!')
            // }
        } catch (error) {
            console.log("Error occured. NOK!!");
            setAuthState({
                ...authState, error: error.message,
            });
        } finally {
            setAuthState({
                ...prevState, isLoading: false,
            });
        }
    };

    return (<AuthContext.Provider value={{ authState, login, logout, signup, forgotPassword, changePassword }}>
        {children}
    </AuthContext.Provider>);
};
