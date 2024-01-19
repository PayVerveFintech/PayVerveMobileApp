import React, { createContext, useState, useContext } from "react";
import { signIn, signUp } from "./apiRequest";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (userName, password) => {

        response = signIn(userName, password);
        
        if (userName === "admin" && password === "admin") {
            setUser({Welcome});
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