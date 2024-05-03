import React, { createContext, useState, useContext } from "react";
// import KYCVerification from "../screens/KYCVerification";
import { useNavigation } from "@react-navigation/native"
import { signIn } from "./apiRequest";
import { Alert } from "react-native";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigation = useNavigation();

    const [user, setUser] = useState(null);
    conss [token, setToken] = useState(null);

    const login = (userName, password) => {
        let response = signIn(userName, password);
        response.then(res =>{
            setUser(res.user_data);
            setToken(res.firebase_access_token);
        }).catch(()=>{
            setUser(null);
            Alert.alert('Invalid credentials')
        });
    }

    return (
        <AuthContext.Provider value={{user, login}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => {
    return useContext(AuthContext);
};
