import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/ButtonComponent/Button"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import InputBox from "../../components/InputBox"
import Header from "../../components/HeaderComponent"

const BettingScreen = () => {
    const navigation = useNavigation()

    const whenPress = () => {
        {/* logic to pass information to review screen */}
        navigation.navigate("Review")
        
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Betting" />

            <View style={styles.bettingScreen}>
                {/* replace with dropdown component */}
                <InputBox 
                    label="Select Service Provider"
                    placeholder="Select Service Provider"
                />

                <InputBox 
                    label="Users ID"
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

export default BettingScreen