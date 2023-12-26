import { Pressable, View, Text } from "react-native"
import { styles } from "./Styles"


export const Button = ({ btn_text, onPress }) => {
    return (
        <View style={styles.btn_wrapper} >
            <Pressable style={styles.btn} onPress={onPress}>
                <Text style={styles.btn_text}>{btn_text}</Text>
            </Pressable>
        </View>
    )
}