import React, { createContext, useState, useContext } from "react";
import { useAuth } from "./AuthContext";

const InfoContext = createContext();

export const userInfo = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {

    // removed individual declarations and used a joint state [infoState]

    // import authSate for user data
    const { authState } = useAuth();

    const [infoState, setInfoState] = useState({
        wallets: [],
        beneficiaries: [],
        point: 5500,
        isLoading: false,
        error: null
    })

    const fetchWallets = async () => {
        try {
            const response = await axios.post(apiUrl + `/api/v1/wallets/${authState.userData.userId}/`);
            const data = await response.json();

            if (response.ok) {
                setInfoState(prevState => ({
                    ...prevState,
                    wallets: data.wallets,
                    error: null,
                }));
            } else {
                throw new Error(data.message || 'Unable to fetch wallets');
            }

        } catch (error) {
            setAuthState(prevState => ({
                ...prevState,
                error: error.message,
            }));

        } finally {
            setAuthState(prevState => ({
                ...prevState,
                isLoading: false,
            }));
        }

    };

    return (
        <InfoContext.Provider value={{ infoState, fetchWallets }}>
            {children}
        </InfoContext.Provider>
    )
};
