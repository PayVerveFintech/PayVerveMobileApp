import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";
import SignUp1 from './SignUp1'

const EmailConfirmation = ({ email, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity 
                    style={{                        
                        paddingTop: 60,
                        paddingLeft: 5
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={require('../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={
                    {
                        fontSize: 35,
                        paddingTop: 50,
                        paddingLeft: 35,
                        alignSelf: 'center',
                        fontWeight: 'bold'
                    }
                }> 
                    Confirm Email Address
                </Text>

            </View>
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