import { BackHandler } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useEffect } from "react";
import { styles } from "./Styles";
import { useNavigation } from "@react-navigation/native";

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