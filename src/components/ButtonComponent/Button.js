import { Pressable, View, Text, TouchableOpacity } from "react-native"
import { styles } from "./styles"


export const Button = ({ btn_text, onPress, disabled }) => {
    return (
        <View style={styles.btn_wrapper} >
            <TouchableOpacity 
                style={[styles.btn, disabled ? styles.inactive : styles.active ]} 
                onPress={disabled ? null : onPress}
            >
                <Text style={styles.btn_text}>{btn_text}</Text>
            </TouchableOpacity>
        </View>
    )
}