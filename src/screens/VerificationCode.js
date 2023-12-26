import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles/styles';

const VerificationCode = ({verifyCode, navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_Text_1}>
                Verification Code
            </Text>

            <Text style={styles.header_Text_2}>
                A verification code as been sent to the email below
            </Text>
            <Text>{}</Text>

            <Text>
                Verification Code
            </Text>

            <TextInput 
                value=''
                placeholder='123456'
                onChangeText={verifyCode}
                style={styles.textInput}
            />

            <TouchableOpacity 
                style={styles.signupButton}
                onPress={() => navigation.navigate('CreateNewPW')}
            >
                <Text style={styles.touchableOpacityText}> Next </Text>
            </TouchableOpacity>

        </View>
    )
}

export default VerificationCode;