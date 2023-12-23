import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
// import { useAuth } from '../hooks/userAuth';
import { styles } from '../styles/styles';
import { AuthProvider } from '../hooks/userAuth';

const Login = () => {
    // const { login } = useAuth();
    
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        try {
           AuthProvider.login(userName, password);
        } catch (error) {
            console.error('Login failed', error.message);
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
                <Text onPress={SignUp} style={{ color: 'blue', fontWeight: 'bold' }}> Sign Up</Text>
            </Text>
        </View>
    );
};

export default Login;