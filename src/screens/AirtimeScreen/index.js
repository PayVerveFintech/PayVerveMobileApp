import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { styles } from "../../styles/styles"

const AirtimeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Airtime</Text>
            </View>
        </SafeAreaView>
    )
}

export default AirtimeScreen