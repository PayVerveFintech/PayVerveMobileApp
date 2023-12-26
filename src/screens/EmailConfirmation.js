import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";
import SignUp1 from './SignUp1'

const EmailConfirmation = ({ email, navigation }) => {
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

            <Text style={styles.signupTexts}>Confirmation Code</Text>

            <TextInput 
                placeholder="123456"
                value={''}
                style={styles.textInput}
                onChangeText={email}
            />

            <TouchableOpacity 
                style={styles.signupButton}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.touchableOpacityText}> Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EmailConfirmation;