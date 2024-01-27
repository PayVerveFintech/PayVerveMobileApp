import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import Header from "../../components/HeaderComponent"


const RequestPOS = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header title="Request POS" />
            
            <View style={styles.posView}>
                <Text style={styles.posInfo}>Stay glued this feature is coming soon to you</Text>
            </View>
        </SafeAreaView>
        
    )
}

export default RequestPOS