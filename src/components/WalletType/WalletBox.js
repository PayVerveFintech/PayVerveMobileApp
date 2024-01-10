import { View, Text, TouchableOpacity, Image } from "react-native"
import { styles } from "./styles"
import { useState } from "react"
import { MaterialIcons } from '@expo/vector-icons'
import nigeria from "../../../assets/Nigeria.png"


export const WalletBox = () => {
    
    const [visible, setVisible] = useState(false)

    const toggleVisibility = () => {
        setVisible(!visible)
    }

    return (
        <View>
            <TouchableOpacity style={styles.walletBoxWrapper}>
                <Image source={nigeria} />

                <View style={styles.walletTypeContainer}>
                    <Text style={styles.walletBoxType}>{"NGN Balance"}</Text>
                    <Text style={[styles.walletBoxBalance, ]}>{visible ? "₦ 20,000" : "*****" }</Text>
                </View>

                <MaterialIcons name={visible ? "visibility" : "visibility-off"} size={22} color="black" onPress={toggleVisibility} />
                
            </TouchableOpacity>
        </View>
    )
}