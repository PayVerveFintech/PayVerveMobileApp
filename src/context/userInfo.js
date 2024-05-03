import React, { createContext, useState, useContext } from "react";
import { useAuth } from "./AuthContext";

const InfoContext = createContext();

export const userInfo = () => useContext(InfoContext);

export const InfoProvider = ({ children }) => {
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [point, setPoint] = useState(5500);
    const { authState } = useAuth();

    const [infoState, setInfoState] = useState({
        wallets: [],
        beneficiaries: [],
        point: 5500,
    })

    const fetchWallets = async () => {
        try {
            const response = await axios.post(apiUrl + `/api/v1/wallets/${authState.userData.userId}/`);
            const data = await response.json();

            if (response.ok) {
                setAuthState({
                    token: data.token,
                    userData: data.userData,
                    isLoading: false,
                    error: null,
                });
            } else {
                throw new Error(data.message || 'Unable to login');
            }

        } catch (error) {

        }

    };


    return (
        <InfoContext.Provider
            value={{
                beneficiaries, setBeneficiaries,
                point, setPoint,
            }}
        >
            {children}
        </InfoContext.Provider>
    )
};

export const useInfo = () => {
    return useContext(InfoContext);
};