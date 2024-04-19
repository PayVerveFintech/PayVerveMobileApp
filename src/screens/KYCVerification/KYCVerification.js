import { useState } from "react";
import { View, Text, ScrollView, TextInput, Platform, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from "react-native"
import { styles } from "../../styles/styles";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const KYCVerification = () => {
    // removed navigation from props and implemented navigation from the useNavigation hook
    const navigation = useNavigation();

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [bvn, setBvn] = useState('');
    const [nin, setNin] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState('');
    const [address, setAddress] = useState('');
    const [ occupation, setOccupation] = useState('');
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        validateForm();
    }, [fullname, email, phonenumber, bvn, nin, gender, dob, occupation]);

    const validateForm = () => {
        let errors = {};
        // gender setup
        let M = "male";
        let G = "female"

        // validating the fullname text field
        if(!fullname) {
            errors.fullname = ('full name is required');
        }

        // validating the email text field
        if(!email) {
            errors.email = ('email is required');
        }

        // validating the phone number text field
        if(!phonenumber) {
            errors.phonenumber = ('phone number is required');
        }

        // validating the bvn text field
        if(!bvn) {
            errors.bvn = ('bvn is required')
        }

        // validating the nin text field
        if (!nin) {
            errors.nin = ('NIN is required');
        }

        // validating the gender text field
        if (!gender) {
            errors.gender = ('gender is required');
        } else if (M != 'male' && G != "female") {
            errors.gender = ('gender input incorrect')
        }

        // validating the dob text field
        if (!dob) {
            errors.bvn = ('dob is required');
        }

        // validating the occupation text field
        if (!occupation) {
            errors.occupation = ('occupation is required');
        }

        // setting the errors and update from validity
        setErrors(errors);
        setIsFormValid(Object.keys(errors).length === 0);
    };

    // handling submit button
    const handleSubmit = () => {
        if (isFormValid) {
            navigation.navigate('KYCVerify2');
        } else {
            console.log ('Errors in form. Please review the form again.')
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header_Text_1}>
                KYC Verification
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30}}>
                <View style={{flexDirection: 'column'}}>
                    <Text>Personal Information</Text>
                    <Text>Personal Information</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <Text>Selfie</Text>
                    <Text>Selfie</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <Text>Confirmation</Text>
                    <Text>Confirmation</Text>
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : null}
            >
                <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    <View style={styles.signUpcontainer1}>
                        <Text style={styles.signupTexts}>
                            Full Name
                        </Text>
                        <TextInput
                            placeholder="Full name"
                            value={fullname} 
                            style={styles.textInput}
                            onChangeText={setFullname}
                        />

                        <Text style={styles.signupTexts}>
                            Email Address
                        </Text>
                        <TextInput
                            placeholder="Email"
                            value={email} 
                            style={styles.textInput}
                            onChangeText={setEmail}
                        />

                        <Text style={styles.signupTexts}>
                            Phone Number
                        </Text>
                        <TextInput
                            placeholder="Text field"
                            value={phonenumber} 
                            style={styles.textInput}
                            onChangeText={setPhonenumber}
                        />

                        <Text style={styles.signupTexts}>
                            BVN
                        </Text>
                        <TextInput
                            placeholder="Text field"
                            value={bvn} 
                            style={styles.textInput}
                            onChangeText={setBvn}
                        />

                        <Text style={styles.signupTexts}>
                            NIN
                        </Text>
                        <TextInput
                            placeholder="Text field"
                            value={nin} 
                            style={styles.textInput}
                            onChangeText={setNin}
                        />

                        <Text style={styles.signupTexts}>
                            Gender
                        </Text>
                        <TextInput
                            placeholder="Female"
                            value={gender} 
                            style={styles.textInput}
                            onChangeText={setGender}
                        />

                        <Text style={styles.signupTexts}>
                            D.O.B
                        </Text>
                        <TextInput
                            placeholder="DD/MM/YY"
                            value={dob} 
                            style={styles.textInput}
                            onChangeText={setDOB}
                        />

                        <Text style={styles.signupTexts}>
                            Address
                        </Text>
                        <TextInput
                            placeholder="blah blah blah"
                            value={address} 
                            style={styles.textInput}
                            onChangeText={setAddress}
                        />

                        <Text style={styles.signupTexts}>
                            Occuption
                        </Text>
                        <TextInput
                            placeholder="Unemployed"
                            value={occupation} 
                            style={styles.textInput}
                            onChangeText={setOccupation}
                        />

                        <TouchableOpacity 
                            style={[styles.signupButton, { opacity: isFormValid ? 1 : 0.5}]}
                            // disabled = {isFormValid}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.touchableOpacityText}>Next</Text>
                        </TouchableOpacity>

                        {/* Displaying the error messages */}
                        {Object.values(errors).map((error, index) => (
                            <Text key = {index} style={STYLE.error}>
                                {error}
                            </Text>
                        ))}
                        
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default KYCVerification;

const STYLE = StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 20,
        alignSelf: 'center'
    }
})