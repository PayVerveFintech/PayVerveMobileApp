import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import SignUp from "./SignUp";

const EmailConfirmation = () => {
    return (
        <View style={styles.container}>
            <Text
                style={styles.header_Text_1}
            > 
                Confirm Email Address
            </Text>

            <Text
                style={styles.header_Text_2}
            >
                A confirmation code as been sent to the email below
            </Text>

            <Text
                style={{fontWeight: 'bold', fontSize: 30}}
            >
                {SignUp['']}
            </Text>

            <Text>Confirmation Code</Text>

            <TextInput 
                placeholder="123456"
                value={''}
            />

            <TouchableOpacity
                style={styles.signUpButton}
            >
                <Text> Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EmailConfirmation;