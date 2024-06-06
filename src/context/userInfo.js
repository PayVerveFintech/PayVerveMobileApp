import React, {createContext, useState, useContext} from "react";
import {useAuth} from "./AuthContext";
import {apiUrl} from "../../expo-constants";
import axios from "axios";

const InfoContext = createContext();

const initialState = {
    wallets: [], beneficiaries: [], point: 5500, isLoading: false, error: null
}

export const userInfo = () => useContext(InfoContext);

export const InfoProvider = ({children}) => {

    // removed individual declarations and used a joint state [infoState]

    // import authSate for user data
    const {authState} = useAuth();

    const [infoState, setInfoState] = useState(initialState);

    const fetchWallets = async () => {
        setInfoState({
            ...infoState, isLoading: true
        })
        try {
            const response = await axios.post(apiUrl + `/api/v1/wallets/${authState.userData.id}/`);
            const data = await response.data;
            console.log(data);
            setInfoState({
                ...infoState, wallets: data.wallets
            });


        } catch (error) {
            setInfoState({
                ...infoState, error: error.message
            });

        } finally {
            setInfoState({
                ...infoState, isLoading: false,
            });
        }

    };

    const walletToWalletTransfer = async (payload) => {
        payload = JSON.stringify(payload)
        setInfoState({
            ...infoState, isLoading: true
        })
        try {
            const response = await axios.post(apiUrl + `/api/v1/transfer/${authState.userData.userId}/`, payload);
            const data = await response.json();

            setInfoState({
                ...infoState, wallets: data.wallets, error: null,
            })

        } catch (error) {
            setInfoState({
                ...infoState, error: error.message
            })
        } finally {
            setInfoState({
                ...infoState, isLoading: false,
            })
        }
    }

    const walletToBankTransfer = async (payload) => {
        payload = JSON.stringify(payload)
        setInfoState({
            ...infoState, isLoading: true
        })
        try {
            const response = await axios.post(apiUrl + `/api/v1/transfer/bank/${authState.userData.userId}/`, payload);
            const data = await response.json();

            setInfoState({
                ...infoState, wallets: data.wallets, error: null,
            })

        } catch (error) {
            setInfoState({
                ...infoState, error: error.message
            })
        } finally {
            setInfoState({
                ...infoState, isLoading: false,
            })
        }
    }

    const createWallet = async (currencies) => {
        currencies = JSON.stringify(currencies);
        setInfoState({
            ...infoState, isLoading: true
        })
        try {
            const response = await axios.post(apiUrl + `/api/v1/wallet/`, currencies);
            const data = await response.json();

            setInfoState({
                ...infoState, wallets: data.wallets, error: null,
            })

        } catch (error) {
            setInfoState({
                ...infoState, error: error.message
            })
        } finally {
            setInfoState({
                ...infoState, isLoading: false,
            })
        }
    }

    return (<InfoContext.Provider
            value={{infoState, createWallet, fetchWallets, walletToWalletTransfer, walletToBankTransfer}}>
            {children}
        </InfoContext.Provider>)
};
