import { View, Text, TextInput } from "react-native"
import { styles } from "./styles"


const InputBox = ({ label, placeholder}) => {

    return(
        <View style={styles.boxWrapper}>
            <Text style={styles.boxLabel}>{label}</Text>
            <TextInput 
                placeholder={placeholder}
                style={styles.inputBox}
            />
        </View>
    )
}

export default InputBox