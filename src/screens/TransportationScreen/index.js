import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/HeaderComponent"
import InputBox from "../../components/InputBox"


const TransportationScreen = () => {
    const navigation = useNavigation()

    const whenPress = () => {
        {/* logic to pass information to review screen */}
        navigation.navigate("Review")
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Transportation" />

            <View style={styles.transportScreen}>
                {/* replace with dropdown component */}
                <InputBox 
                    label="Select Service Provider"
                    placeholder="Select Service Provider"
                />

                {/* replace with dropdown component */}
                <InputBox 
                    label="Package"
                    placeholder="123456789"
                />

                <InputBox 
                    label="Tag Number"
                    placeholder="123456789"
                />

                <InputBox 
                    label="Amount"
                    placeholder="123456789"
                />

                <Button btn_text="Proceed" onPress={whenPress}/>
            </View>
        </SafeAreaView>
    )
}

export default TransportationScreen