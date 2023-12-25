import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

const EmailConfirmation = ({ email }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_Text_1}> 
                Confirm Email Address
            </Text>

            <Text style={styles.header_Text_2}>
                A confirmation code as been sent to the email below 
            </Text>

            <Text style={{fontWeight: 'bold', fontSize: 30}}>
                {''}
            </Text>

            <Text>Confirmation Code</Text>

            <TextInput 
                placeholder="123456"
                value={''}
                style={styles.textInput}
                onChangeText={email}
            />

            <TouchableOpacity style={styles.signupButton}>
                <Text style={styles.touchableOpacityText}> Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EmailConfirmation;