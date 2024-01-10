import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";


export const Wallet = ({ onPress, checked, account, image }) => {
    
    return (
        <View>
            <TouchableOpacity style={styles.walletContainer} onPress={onPress}>
                <Image source={image} />

                <View style={{flex: 2, gap: 16}}>
                    <Text style={styles.walletBoxBalance}>{account} Account</Text>
                    {checked 
                        ?   <View style={{gap: 12}}>
                                <Text style={styles.walletRequirement}>Minimum requirement</Text>
                                <Text style={styles.requirementDetails}>Proof of Address</Text>
                                <Text style={styles.requirementDetails}>A Selfie</Text>
                                <Text style={styles.requirementDetails}>NIN</Text>
                            </View>
                        : null
                    }

                </View>

                <View style={[styles.walletCheckbox, checked ? styles.walletChecked : null]}>
                </View>
            </TouchableOpacity>
        </View>
    )
}