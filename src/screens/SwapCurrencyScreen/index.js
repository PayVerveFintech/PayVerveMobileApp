import { View, Text, Image, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import InputBox from "../../components/InputBox"
import chart from "../../../assets/labelChart.png"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/HeaderComponent"



const SwapCurrencyScreen = () => {
    const navigation = useNavigation()

    const [currency, setCurrency] = useState("")
    const [swapAmount, setSwapAmount] = useState("")
    const [amount, setAmount] = useState("")
    const [exchangeFee, setExchangeFee] = useState("")


    //capture selected currency value
    const handleCurrencySelect = (text) => {
        setCurrency(text)
    };

    //capture swap amount value
    const handleSwapAmount = (text) => {
        setSwapAmount(text)
    };

    //set amount to swap 
    const handleAmount = (text) => {
        setAmount(text)
    };

    //set exchange fee
    const handleExchangeFee = (text) => {
        setExchangeFee(text)
    }


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
        <Header title="Swap Currency" />
        
        <View style={styles.formView}>
            {/* replace with dropdown component */}
            <InputBox 
                placeholder="Swap To" 
                label="Select Currency" 
                onChangeText={handleCurrencySelect}
                value={currency}
                Icon={<Image source={chart} />} 
            />

            <InputBox 
                placeholder="123456789" 
                label="Amount"
                onChangeText={handleAmount} 
                value={amount}
                keyboardType="number-pad"
            />

            <InputBox 
                placeholder="123456789" 
                label="NGN"
                onChangeText={handleSwapAmount} 
                value={swapAmount}
            />

            <InputBox 
                placeholder="123456789" 
                label="Exchange Fee" 
                value={exchangeFee}
                onChangeText={handleExchangeFee}
            />

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