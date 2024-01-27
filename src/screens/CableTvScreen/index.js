import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"
import InputBox from "../../components/InputBox";
import Header from "../../components/HeaderComponent"

const CableTvScreen = () => {
    const navigation = useNavigation()

    const whenPress = () => {
        //logic to pass information to review screen
        navigation.navigate("Review")
    }


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Cable TV" />
            <View style={styles.cableScreen}>
                 {/* replace with dropdown component */}
                <InputBox 
                    label="Select Service Provider"
                    placeholder="Select Service Provider"
                />

                <InputBox 
                    label="Smartcard Number"
                    placeholder="123456789"
                />

                {/* replace with dropdown component */}
                <InputBox 
                    label="Select Package"
                    placeholder="Select Package"
                />
                

                <InputBox 
                    label="Amount"
                    placeholder="123456789"
                />

                <Button btn_text="Proceed" onPress={whenPress} />
            </View>
        </SafeAreaView>
    )
}

export default CableTvScreen