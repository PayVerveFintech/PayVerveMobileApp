import { View, Image, Text } from "react-native"
import { styles } from "../styles/styles"
import successful from "../../assets/successful.png"
import { Button } from "../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"


export const SuccessfulScreen = () => {

    const navigation = useNavigation()

    const whenPress = () => {
        navigation.navigate("Data")
    }

    return (
        <View style={styles.container}>
            <View style={styles.successful_screen_wrapper}>
                <Image source={successful} />
                <Text style={styles.successful_screen_text}>Your transaction is successful</Text>
            </View>

            <Button btn_text="Back Home" onPress={whenPress} />

        </View>
    )
}