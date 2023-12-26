import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { useAuth } from '../hooks/userAuth';
import { styles } from '../styles/styles';
// import { AuthProvider } from '../hooks/userAuth';
import SignUp1 from './SignUp1';
import ForgetPassword from './ForgetPassword';

const CORRECT_USERNAME = 'admin';
const CORRECT_PASSWORD = 'admin'

const Login = ({ navigation }) => {
    // const { login } = useAuth();
    
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');

    const handleLogin = () => {
        if (userName === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
            navigation.navigate('KYCVerify')
        } else if (userName === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
            alert.alert('Invalid password')
        } else if (userName === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
            Alert.alert('Incorrect userName')
        }{
            Alert.alert('Invaild credentials')
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header_Text_1}>Login</Text>
            <Text style={styles.header_Text_2}>
                Let's transform the way you manage, invest, and expand your financial resources.
            </Text>

            <View style={styles.signUpcontainer1}>
                <Text style={styles.signupTexts}>Username</Text>
                <TextInput
                    value={userName}
                    placeholder="username"
                    style={styles.textInput}
                    onChangeText={onChangeUserName}
                />

                <Text style={styles.signupTexts}>Password</Text>
                <TextInput
                    secureTextEntry
                    value={password}
                    placeholder="password"
                    style={styles.textInput}
                    onChangeText={onChangePassword}
                />

                <Text style={
                    { 
                        alignSelf: 'flex-end', 
                        marginEnd: 30, 
                        fontSize: 18
                    }
                    }
                    onPress={navigation.navigate('ForgetPassword')}
                >
                    Forgetten Password?
                </Text>

                <TouchableOpacity
                style={styles.signupButton} 
                    onPress={handleLogin}
                >
                    <Text style={styles.touchableOpacityText}>
                        Login
                    </Text>
                </TouchableOpacity>

                <Text
                    style={{alignSelf: 'center', fontSize: 14}}
                >
                    Don't have an account?{' '}
                    <Text 
                        onPress={() => navigation.navigate('SignUp1')} 
                        style={{ color: 'skyblue', fontWeight: 'bold', fontSize: 16}}
                    > 
                        Sign Up
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default Login;