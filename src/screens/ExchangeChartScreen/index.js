import { View, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputBox from "../../components/InputBox"
import chart from "../../../assets/chartFrame.png"
import { styles } from "./styles"
import Header from "../../components/HeaderComponent"


const ExchangeChartScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
        <Header title="Exchange Chart" />
        
        <View style={styles.inputWrapper}>
            {/* replace with dropdown component */}
            <InputBox label="Select Currency" placeholder="" />

            <InputBox label="Amount" placeholder="1" />

            <InputBox label="NGN" placeholder="903.89" />

            <View style={styles.exchangeDetails}>
                <Text style={styles.exchangeFromCurrency}>{"1"} {"United States Dollars"} equals</Text>

                <View style={styles.exchangeRateFlex}>
                  <Text style={styles.exchangeRate}>{"802.99"}</Text>
                  <Text style={styles.exchangeRateCurrency}>{"Nigerian Naira"}</Text>
                </View>

                <Text style={styles.timeAndDate}>As at {"16, Dec"}, {"21:01"} UTC</Text>
            </View>
        </View>


        <View>
            <Image source={chart} />
        </View>
    </SafeAreaView>
  )
}

export default ExchangeChartScreen