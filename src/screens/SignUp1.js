import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import { styles } from '../styles/styles';
import EmailConfirmation from './EmailConfirmation';
import Login from './Login';

const SignUp1 = ({navigation}) => {
    const baseText = [
        "Creating an account with PayVerve is completely ",
        "Already have an account?",
    ];
    const appendText = ["FREE", "Log in"];
    const [email, onChangeEmail] = useState('');
    const [fullName, onChangeFullName] = useState('');
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');

    return (
        <View style={styles.signupContainer}>
            <Text style={styles.header_Text_1}>SignUp</Text>

            <Text style={styles.header_Text_2}>
                {baseText[0]}
                <Text style={{fontWeight: 'bold'}}>{appendText[0]}</Text>
            </Text>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={styles.signUpcontainer1}>
                        {/* Email */}
                        <Text style={styles.signupTexts}>Email</Text>
                        <TextInput
                            value={email}
                            placeholder="Email"
                            onChangeText={onChangeEmail}
                            style={styles.textInput}
                        />

                        {/* Full name */}
                        <Text style={styles.signupTexts}>Full Name</Text>
                        <TextInput
                            value={fullName}
                            placeholder="Full name"
                            onChangeText={onChangeFullName}
                            style={styles.textInput}
                        />

                        {/* User name */}
                        <Text style={styles.signupTexts}>Username</Text>
                        <TextInput
                            value={userName}
                            placeholder="Username"
                            onChangeText={onChangeUserName}
                            style={styles.textInput}
                        />

                        {/* Password */}
                        <Text style={styles.signupTexts}>Password</Text>
                        <TextInput
                            value={password}
                            secureTextEntry
                            placeholder="Password"
                            onChangeText={onChangePassword}
                            style={styles.textInput}
                        />

                        <Text>
                            Your password should have a upperCase, lowerCase letter, number and a special characters.
                        </Text>

                        {/* Confirm password */}
                        <Text style={styles.signupTexts}>Confirm Password</Text>
                        <TextInput
                            value={confirmPassword}
                            secureTextEntry
                            placeholder="Confirm Password"
                            onChangeText={onChangeConfirmPassword}
                            style={styles.textInput}
                        />

                        <TouchableOpacity 
                            style={styles.signupButton} 
                            onPress={() => navigation.navigate('EmailConfirmation')}
                        >
                            <Text style={
                                {
                                    color: 'white', 
                                    fontWeight: 'bold', 
                                    fontSize: 25, 
                                    alignSelf: 'center',
                                    padding: 10
                                }
                            }>
                                SignUp
                            </Text>
                        </TouchableOpacity>

                        <Text style={{alignSelf: 'center', fontSize: 14}} onPress={() => navigation.navigate('Login') }>
                            {baseText[1]}
                            <Text style={{color: 'skyblue', fontSize: 16}}>{appendText[1]}</Text>
                        </Text>

                        {/* <EmailConfirmation email={email} /> */}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default SignUp1;