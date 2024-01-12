import { View, Text } from "react-native"
import { styles } from "../styles/styles"
import SwapCurrencyScreen from "./SwapCurrencyScreen"

export const FinanceScreen = () => {

    return (
        <View style={styles.container}>
            {/* <Text>Finance Screen</Text> */}
            <SwapCurrencyScreen />
        </View>
    )
}