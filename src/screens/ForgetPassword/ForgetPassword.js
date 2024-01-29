import * as React from 'react';
import { TextInput, TouchableOpacity, View, Text } from 'react-native';
import { styles } from '../../styles/styles';
import { useState } from 'react';

const ForgetPassword = ({navigation}) => {
    const [email, onChangeEmail] = useState('');
    return(
        <View style={styles.container}>
            <Text style={styles.header_Text_1}>
                Reset Password
            </Text>

            <Text style={styles.header_Text_2}>
                Forgetten password! No worries, we've got you covered. Simply follow these easy steps to reset your password.
            </Text>

            <Text style={
                {
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginTop: 50
                }
            }>
                Email Address
            </Text>

            <TextInput 
                placeholder='Email'
                value={email}
                style={styles.textInput}
                onChangeText={onChangeEmail}
            />

            <TouchableOpacity
                style={styles.signupButton}
                onPress={() => navigation.navigate('EmailConfirmation')}
            >
                <Text style={styles.touchableOpacityText}> 
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ForgetPassword;