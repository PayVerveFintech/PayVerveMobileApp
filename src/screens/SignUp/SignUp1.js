import React, { useState } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Alert
} from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';


const SignUp1 = () => {
    // removed navigation from props and implemented navigation from the useNavigation hook
    const navigation = useNavigation();

    const baseText = [
        "Creating an account with PayVerve is completely ",
        "Already have an account? ",
    ];
    const appendText = ["FREE", "Log in"];
    const [email, onChangeEmail] = useState('');
    const [fullName, onChangeFullName] = useState('');
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');

    // const handlePasswordMatch =() => {
    //     if (password.value == confirmPassword.value) {
    //         navigation.navigate('KYCVerify')
    //     } else {
    //         Alert.alert('Password Mismatch')
    //     }
    // }
    
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
                            onPress={() => navigation.navigate('KYCVerify')}
                        >
                            <Text style={styles.touchableOpacityText}>
                                SignUp
                            </Text>
                        </TouchableOpacity>

                        {/* This is temporary */}
                        {/* <TouchableOpacity 
                            style={styles.signupButton} 
                            onPress={() => navigation.navigate('Finance')}
                        >
                            <Text style={styles.touchableOpacityText}>
                                Finance
                            </Text>
                        </TouchableOpacity> */}
                        {/* commented the above compponent out */}

                        <Text style={{alignSelf: 'center', fontSize: 14}} onPress={() => navigation.navigate('Login') }>
                            {baseText[1]}
                            <Text style={{color: 'blue', fontSize: 16, fontWeight: 'bold', textDecorationLine: 'underline'}}>{appendText[1]}</Text>
                        </Text>

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default SignUp1;