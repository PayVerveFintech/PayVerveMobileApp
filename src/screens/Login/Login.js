import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Keyboard, TouchableWithoutFeedback, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CustomTextInput from '../../components/customTextInput';
import { Button } from '../../components/ButtonComponent/Button';





const CORRECT_USERNAME = 'admin';
const CORRECT_PASSWORD = 'admin'

const Login = () => {
    // const { login } = useAuth();
    
    // removed navigation from props and implemented navigation from the useNavigation hook
    const navigation = useNavigation();
    
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
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <View style={styles.root}>
                <Text style={styles.title}>Login</Text>
                <Text style={styles.text}>
                    Let's transform the way you manage, invest, and expand your financial resources.
                </Text>

                <View>
                   <View style={styles.inputContainer}>
                    <CustomTextInput
                        title={"Username"}
                        placeHolder={"eg Olamide"}
                        value={userName}
                        setValue={onChangeUserName}
                    />
                    <CustomTextInput
                        title={"Password"}
                        placeHolder={"password"}
                         value={password}
                         setValue={onChangePassword}
                    />
                   </View>
                    {/* forget password button */}
                    <Text 
                        style={styles.forgot}
                        onPress={() => navigation.navigate('ForgetPassword')}
                    >
                        Forgetten Password?
                    </Text>

                    {/* login function */}
                    <Button
                        btn_text={"Login"}
                        onPress={() => navigation.navigate("AppHome")}
                    />
                    
                    {/* sign up function */}
                    <Text
                        style={styles.signUp}
                    >
                        Don't have an account?{' '}
                        <Text 
                            onPress={() => navigation.navigate('SignUp')} 
                        > 
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default Login;


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: wp(3),
    paddingTop: hp(10)
    },
    title: {
        fontSize: 20,
        fontWeight: "900",
        alignSelf: "center",
        marginBottom: hp(5)
    },
    text: {
        fontSize: 16,
        fontWeight: "500",
        alignSelf: "center"
    },
    forgot: {
        alignSelf: "flex-end",
        paddingRight: wp(2)
    },
    signUp: {
        marginTop: hp(3),
        alignSelf: "center"
    },
    inputContainer: {
        marginTop: hp(5),
        paddingHorizontal: wp(2),
        marginBottom: hp(5)
    }
})