import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"


const InputBox = ({ label, placeholder, onPress, Icon}) => {

    return(
        <View style={styles.boxWrapper}>
            <View style={styles.labelWrapper}>
                <Text style={styles.boxLabel}>{label}</Text>
                <TouchableOpacity
                    onPress={onPress}
                    style={styles.extraIcon}
                >
                    {Icon}
                </TouchableOpacity>

            </View>
            <TextInput 
                placeholder={placeholder}
                style={styles.inputBox}
            />
        </View>
    )
}

export default InputBox