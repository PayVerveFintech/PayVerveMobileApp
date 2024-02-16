import React, { createContext, useState, useContext } from "react";
// import KYCVerification from "../screens/KYCVerification";
import { useNavigation } from "@react-navigation/native"

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigation = useNavigation();

    const [user, setUser] = useState(null);

    const login = (userName, password) => {
        if (userName === "admin" && password === "admin") {
            // setUser({KYCVerification});
            navigation.navigate('KYCVerification')
        } else {
            setUser(null);
            throw new Error('Invaild credentials');
        }
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
