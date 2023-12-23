import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { useAuth } from '../hooks/userAuth';
import { styles } from '../styles/styles';
// import { AuthProvider } from '../hooks/userAuth';
import SignUp1 from './SignUp1';

const Login = () => {
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

            <Text>Username</Text>
            <TextInput
                value={userName}
                placeholder="username"
                style={styles.textInput}
                onChangeText={(text) => setUserName(text)}
            />

            <Text>Password</Text>
            <TextInput
                secureTextEntry
                value={password}
                placeholder="password"
                style={styles.textInput}
                onChangeText={(text) => setPassword(text)}
            />

            <Text>Forget Password?</Text>

            <TouchableOpacity onPress={handleLogin}>
                <Text>Login</Text>
            </TouchableOpacity>

            <Text>
                Don't have an account?{' '}
                <Text onPress={SignUp1} style={{ color: 'blue', fontWeight: 'bold' }}> Sign Up</Text>
            </Text>
        </View>
    );
};

export default Login;