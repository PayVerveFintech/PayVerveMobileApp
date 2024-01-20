import React, { createContext, useState, useContext } from "react";

const InfoContext = createContext();

export const InfoProvider = ({children}) => {
    const [beneficiaries, setBeneficiaries] = useState([]);
    const [point, setPoint] = useState(5500)


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