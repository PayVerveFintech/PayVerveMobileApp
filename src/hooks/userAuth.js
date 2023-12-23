import React, { createContext, useState, useContext } from "react";
import KYCVerification from "../screens/KYCVerification";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (userName, password) => {
        if (userName === "admin" && password === "admin") {
            setUser({KYCVerification});
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