import { View, Text, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import InputBox from "../../components/InputBox"
import chart from "../../../assets/labelChart.png"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"



const SwapCurrencyScreen = () => {
    const navigation = useNavigation()

    //function to send details and navigate to review screen
    const goToReview = () => {
        //logic to send details to review screen
        navigation.navigate("Review", {details: "swapCurrency"})
    }

    //function to navigate to exchange chart screen
    const goToExchangeChart = () => {
        navigation.navigate("Exchange Chart")
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.formView}>
            {/* replace with dropdown component */}
            <InputBox 
                placeholder="" 
                label="Select Currency" 
                Icon={<Image source={chart} />} 
            />

            <InputBox placeholder="" label="Amount" />

            <InputBox placeholder="" label="NGN" />

            <InputBox placeholder="" label="Exchange Fee" />

            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={goToExchangeChart}
                >
                    <Text style={styles.touchableText}>View Exchange Rate Chart</Text>
                </TouchableOpacity>

                <Button btn_text="Swap" onPress={goToReview} />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default SwapCurrencyScreen