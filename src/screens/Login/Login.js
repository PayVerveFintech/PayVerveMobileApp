import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
// import { useAuth } from '../hooks/userAuth';
import { styles } from '../../styles/styles';
// import { AuthProvider } from '../hooks/userAuth';
import Styles from './styles';

const CORRECT_USERNAME = 'admin';
const CORRECT_PASSWORD = 'admin'

const Login = ({ navigation }) => {
    // const { login } = useAuth();
    
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');

    // handling functions
    const handleLogin = () => {
        if (userName === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
            navigation.navigate('KYCVerify')
        }else {
            Alert.alert('Incorrect email/password')
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
                
                {/* forget password button */}
                <Text style={Styles.loginForgetPSW_txt}
                    onPress={() => navigation.navigate('ForgetPassword')}
                >
                    Forgetten Password?
                </Text>

                {/* login function */}
                <TouchableOpacity
                    style={styles.signupButton} 
                    onPress={handleLogin}
                >
                    <Text style={styles.touchableOpacityText}>
                        Login
                    </Text>
                </TouchableOpacity>
                
                {/* sign up function */}
                <Text
                    style={Styles.loginSignUp_outer_txt}
                >
                    Don't have an account?{' '}
                    <Text 
                        onPress={() => navigation.navigate('SignUp1')} 
                        style={Styles.loginSignUp_inner_txt}
                    > 
                        Sign Up
                    </Text>
                </Text>
            </View>
        </View>
    );
};

export default Login;