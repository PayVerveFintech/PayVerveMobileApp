import { Pressable, View, Text, TouchableOpacity } from "react-native"
import { styles } from "./Styles"


export const Button = ({ btn_text, onPress }) => {
    return (
        <View style={styles.btn_wrapper} >
            <TouchableOpacity style={styles.btn} onPress={onPress}>
                <Text style={styles.btn_text}>{btn_text}</Text>
            </TouchableOpacity>
        </View>
    )
}