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
import CustomTextInput from '../../components/customTextInput';
import { Button } from '../../components/ButtonComponent/Button';

const SignUp1 = () => {

    const navigation = useNavigation();
    const [email, onChangeEmail] = useState('');
    const [fullName, onChangeFullName] = useState('');
    const [userName, onChangeUserName] = useState('');
    const [password, onChangePassword] = useState('');
    const [confirmPassword, onChangeConfirmPassword] = useState('');

    // State for error messages
    const [errors, setErrors] = useState({});

    const validateInputs = () => {
        let valid = true;
        const newErrors = {};

        // Email validation
        if (!email.trim()) {
            valid = false;
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            valid = false;
            newErrors.email = "Enter a valid email address.";
        }

        // Full Name validation
        if (!fullName.trim()) {
            valid = false;
            newErrors.fullName = "Full Name is required.";
        }

        // Username validation
        if (!userName.trim()) {
            valid = false;
            newErrors.userName = "Username is required.";
        }

        // Password validation
        if (!password.trim()) {
            valid = false;
            newErrors.password = "Password is required.";
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}/.test(password)) {
            valid = false;
            newErrors.password = "Password must contain uppercase, lowercase, number, and a special character.";
        }

        // Confirm Password validation
        if (!confirmPassword.trim()) {
            valid = false;
            newErrors.confirmPassword = "Confirm your password.";
        } else if (confirmPassword !== password) {
            valid = false;
            newErrors.confirmPassword = "Passwords do not match.";
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSignUp = () => {
        if (validateInputs()) {
            // Proceed with sign-up logic
            Alert.alert("Sign-Up Successful!");
        }
    };

    return (
        <View style={styles.signupContainer}>
            <Text style={styles.signUp}>SignUp</Text>
            <View style={{alignItems: "center", justifyContent: "center"}}>
            <Text style={styles.desc}>Creating an account with PayVerve is {"\n"} completely <Text style={{fontWeight: "900", fontSize: 18}}>Free</Text> </Text>
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                style={{flex: 1}}
            >
                <ScrollView 
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.signUpcontainer1}>
                        <CustomTextInput
                            placeHolder={"Email"}
                            value={email}
                            setValue={onChangeEmail}
                            title={"Email"}
                        />
                        {errors.email && <Text style={{ color: 'red', fontSize: 11 }}>{errors.email}</Text>}

                        <CustomTextInput
                            placeHolder={"eg Olamide"}
                            title={"Full Name"}
                            value={fullName}
                            setValue={onChangeFullName}
                        />
                        {errors.fullName && <Text style={{ color: 'red', fontSize: 11 }}>{errors.fullName}</Text>}

                        <CustomTextInput
                            placeHolder={"username"}
                            title={"UserName"}
                            value={userName}
                            setValue={onChangeUserName}
                        />
                        {errors.userName && <Text style={{ color: 'red', fontSize: 11 }}>{errors.userName}</Text>}

                        <CustomTextInput
                            placeHolder={"password"}
                            title={"Password"}
                            value={password}
                            setValue={onChangePassword}
                        />
                        {errors.password && <Text style={{ color: 'red', fontSize: 11 }}>{errors.password}</Text>}

                        <Text style={{ fontSize: 11, marginBottom: 5, marginTop: 5 }}>
                            Your password should have an uppercase, lowercase letter, number and {"\n"}a special character.
                        </Text>
                        
                        <CustomTextInput
                            placeHolder={"confirm password"}
                            title={"Confirm Password"}
                            value={confirmPassword}
                            setValue={onChangeConfirmPassword}
                        />
                        {errors.confirmPassword && <Text style={{ color: 'red', fontSize: 11 }}>{errors.confirmPassword}</Text>}

                        <Button
                            btn_text={"Signup"}
                            onPress={handleSignUp}
                        />
                        <Text 
                            style={{ fontSize: 12, alignSelf: "center", marginTop: 5 }}
                        >
                            Already have an account? <Text onPress={() => navigation.navigate("Login")} style={{ color: "#2196F3", fontWeight: "900" }}>Login</Text> 
                        </Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    );
};

export default SignUp1;
