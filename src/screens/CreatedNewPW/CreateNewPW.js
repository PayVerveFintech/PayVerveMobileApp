import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/styles";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const CreateNewPW = ({navigation}) => {

    const [password, onChangePassword] = useState('');
    const [confirmPSW, onChangeConfirmPSW] = useState('');

    // import authSate for user data
    const { changePassword } = useAuth();

    const handleReset = () => {
        let isSuccess = changePassword(password);
        if (isSuccess)
            navigation.navigate("AppHome");
    }
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
                        source={require('../../../assets/backVector.png')}
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
                    Create New Password
                </Text>

            </View>

            <Text style={styles.header_Text_2}>
                When creating a new pasword kindly use words/sentences that can be easily remembered by you.
            </Text>

            <Text style={{marginTop: '30%'}}>
                New Password
            </Text>
            <TextInput 
                value={password}
                secureTextEntry={true}
                placeholder="Enter your password"
                style={styles.textInput}
                onChangeText={onChangePassword}
            />

            <Text> 
                Confirm New Password
            </Text>
            <TextInput 
                value={confirmPSW}
                // onSubmitEditing={()=> navigation.navigate('SignUp')} // Go to Sign Up page after confirmation
                placeholder="Confirm your password"
                secureTextEntry
                style={styles.textInput}
                onChangeText={onChangeConfirmPSW}
            />

            <TouchableOpacity 
                style={styles.signupButton}
                onPress={() => handleReset() }
            >
                <Text style={styles.touchableOpacityText}> Reset </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateNewPW;