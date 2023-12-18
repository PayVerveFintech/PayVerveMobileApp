import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useAuth } from "../hooks/userAuth";
import { useState } from "react";
import { styles } from '../styles/styles';

// Login function
export const Login = () => {

    const {userName, onChangeUserName} = useState('');
    const {password, onChangePassword} = useState('');

    // Login authentication
    const { login } = useAuth();

    const handleLogin = () => {
        try {
            handleLogin(userName, password)
        } catch (error) {
            console.error('Login failed', error.message)
        }
    }

    return (
        <View style={styles.container}>

            <Text
                style={styles.header_Text_1}
            > 
                Login 
            </Text>

            <Text
                style={styles.header_Text_2}
            >
                Let's transform the way you manage, invest, and expand your financial resources.
            </Text>
            
            <Text>Username</Text>
            
            <TextInput
                value={userName}
                placeholder='username'
                style={styles.textInput}
                onChange={onChangeUserName}
            />

            <Text>Password</Text>

            <TextInput
                secureTextEntry
                value={password}
                placeholder='password'
                style={styles.textInput}
                onChange={onChangePassword}
            />

            <Text>Forget Password?</Text>

            <TouchableOpacity
                onPress={login}
            >
                <Text>Login</Text>
            </TouchableOpacity>

            <Text>
                Don't have an account? <Text style={{color: 'blue', fontWeight: 'bold'}}> Sign Up</Text>
            </Text>

        </View>
    )
}