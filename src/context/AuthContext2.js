// AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: null,
    user: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('firebase_access_token');
      const user = JSON.parse(await AsyncStorage.getItem('user_data'));
      if (token && user) {
        setAuthState({ token, user });
      }
    };

    loadToken();
  }, []);

  const login = async (data) => {
    const { firebase_access_token, user_data } = data;
    await AsyncStorage.setItem('firebase_access_token', firebase_access_token);
    await AsyncStorage.setItem('user_data', JSON.stringify(user_data));
    setAuthState({
      token: firebase_access_token,
      user: user_data,
    });
  };

  const logout = async () => {
    await AsyncStorage.removeItem('firebase_access_token');
    await AsyncStorage.removeItem('user_data');
    setAuthState({ token: null, user: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
