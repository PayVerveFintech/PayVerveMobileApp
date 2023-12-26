import { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native"
import { styles } from "../styles/styles";

const KYCVerification = ({navigation}) => {

    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [bvn, setBvn] = useState('');
    const [nin, setNin] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDOB] = useState('');
    const [address, setAddress] = useState('');
    const [ occupation, setOccupation] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.header_Text_1}>
                KYC Verification
            </Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
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
                            style={styles.signupButton}
                            onPress={() => navigation.navigate('KYCVerify2')}
                        >
                            <Text style={styles.touchableOpacityText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default KYCVerification;