import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"


const InputBox = ({ label, placeholder, labelRight, onPress, Icon, name, value, onChangeText, keyboardType }) => {

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
                name={name}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboardType}
            />
            {labelRight && <Text style={styles.labelRight}>{labelRight}</Text>}
        </View>
    )
}

export default InputBox