import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { useAuth } from '../hooks/userAuth';
import { styles } from '../styles/styles';
// import { AuthProvider } from '../hooks/userAuth';
import SignUp1 from './SignUp1';
import ForgetPassword from './ForgetPassword';

const Login = ({ navigation }) => {
    // const { login } = useAuth();

    const CORRECT_EMAIL = 'admin';
    const CORRECT_PASSWORD = 'admin'
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (CORRECT_EMAIL && CORRECT_PASSWORD === 'admin') {
            navigation.navigate('')
        } else if (CORRECT_EMAIL === 'admin' && CORRECT_PASSWORD != 'admin') {
            Alert.alert('Invalid password')
        } else if (CORRECT_EMAIL != 'admin' && CORRECT_PASSWORD === 'admin') {
            Alert.alert('Incorrect email')
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
                    onChangeText={(text) => setUserName(text)}
                />

                <Text style={styles.signupTexts}>Password</Text>
                <TextInput
                    secureTextEntry
                    value={password}
                    placeholder="password"
                    style={styles.textInput}
                    onChangeText={(text) => setPassword(text)}
                />

                <Text style={
                    { 
                        alignSelf: 'flex-end', 
                        marginEnd: 30, 
                        fontSize: 18
                    }
                    }
                    onPress={ForgetPassword}
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