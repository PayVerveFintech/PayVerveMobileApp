import { View, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../../styles/styles"
import { WalletBox } from "../../components/WalletType/WalletBox"
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const WalletScreen = () => {
    const navigation = useNavigation()

    const addWallet = () => {
        navigation.navigate("Add a New Wallet")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <View style={{flex: 2}}>
                    <WalletBox />
                </View>

                <TouchableOpacity style={styles.addWalletButton} onPress={addWallet}>
                    <MaterialIcons name="add" size={34} color="black" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}


export default WalletScreen