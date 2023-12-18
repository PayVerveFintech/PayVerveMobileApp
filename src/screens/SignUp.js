import { KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/styles";
import { useState } from "react";
import EmailConfirmation from "./EmailConfirmation";

const SignUp = () => {

    const baseText = [
        "Creating an account with PayVerve is completely ",
        "Already have an account?"
    ];
    const appendText = [
        "FREE",
        "Login"
    ];
    const {email, onChangeEmail} = useState('');
    const {fullName, onChangeFullName} = useState('');
    const {userName, onChangeUserName} = useState('');
    const {password, onChangePassword} = useState('');
    const {confirmPasword, onChangeConfirmPassword} = useState('');

    return (
        <View >
            <Text style={styles.header_Text_1}>
                SignUp
            </Text>

            <Text style={styles.header_Text_2}>
                {`${baseText[0]}${appendText[0] }`}
            </Text>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <ScrollView contentContainerStyle = {{flexGrow: null}}>
                    <View style={styles.container}>

                        {/* Email */}
                        <Text> Email </Text>
                        <TextInput 
                            value={email}
                            placeholder="Email"
                            onChangeText={onChangeEmail}
                            style={styles.textInput}
                        />

                        {/* Full name */}
                        <Text> Full Name </Text>
                        <TextInput 
                            value={fullName}
                            placeholder="full name"
                            onChangeText={onChangeFullName}
                            style={styles.textInput}
                        />

                        {/* User name */}
                        <Text> Username </Text>
                        <TextInput 
                            value={userName}
                            placeholder="username"
                            onChangeText={onChangeUserName}
                            style={styles.textInput}
                        />

                        {/* Password */}
                        <Text> Password </Text>
                        <TextInput 
                            value={password}
                            secureTextEntry
                            placeholder="password"
                            onChangeText={onChangePassword}
                            style={styles.textInput}
                        />

                        {/* Confirm password */}
                        <Text> Confirm Password </Text>
                        <TextInput 
                            secureTextEntry
                            value={confirmPasword}
                            placeholder="Confirm password"
                            onChangeText={onChangeConfirmPassword}
                            style={styles.textInput}
                        />

                        <TouchableOpacity
                            onPress={EmailConfirmation}
                        >
                            <Text style={styles.buttonText}> SignUp</Text>
                        </TouchableOpacity>

                        <Text 
                            onPress={Login}
                        >
                            {`${baseText[1]}${appendText[1]}`}
                        </Text>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default SignUp;