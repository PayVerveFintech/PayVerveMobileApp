import { BackHandler } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";

export const BackButton = () => {
    const navigation = useNavigation()

    const handleBackButtonClick = () => {
        navigation.goBack()
        return true;
    }

    useEffect(() => {
        BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
        return () => {
            BackHandler.removeEventListener("hardwareBackPress", handleBackButtonClick);
        };
    }, []);
        
    return (
        <AntDesign name="arrowleft" size={30} color="black" style={styles.back_btn} onPress={handleBackButtonClick} />
    )
}