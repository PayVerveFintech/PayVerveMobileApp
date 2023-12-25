import { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity } from "react-native"
import { styles } from "../styles/styles";
import KYCVerification2 from "./KYCVerification2";

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

            <ScrollView>
                <Text>
                    Full Name
                </Text>
                <TextInput
                    placeholder="Full name"
                    value={fullname} 
                    style={styles.textInput}
                    onChangeText={setFullname}
                />

                <Text>
                    Email Address
                </Text>
                <TextInput
                    placeholder="Email"
                    value={email} 
                    style={styles.textInput}
                    onChangeText={setEmail}
                />

                <Text>
                    Phone Number
                </Text>
                <TextInput
                    placeholder="Text field"
                    value={phonenumber} 
                    style={styles.textInput}
                    onChangeText={setPhonenumber}
                />

                <Text>
                    BVN
                </Text>
                <TextInput
                    placeholder="Text field"
                    value={bvn} 
                    style={styles.textInput}
                    onChangeText={setBvn}
                />

                <Text>
                    NIN
                </Text>
                <TextInput
                    placeholder="Text field"
                    value={nin} 
                    style={styles.textInput}
                    onChangeText={setNin}
                />

                <Text>
                    Gender
                </Text>
                <TextInput
                    placeholder="Female"
                    value={gender} 
                    style={styles.textInput}
                    onChangeText={setGender}
                />

                <Text>
                    D.O.B
                </Text>
                <TextInput
                    placeholder="DD/MM/YY"
                    value={dob} 
                    style={styles.textInput}
                    onChangeText={setDOB}
                />

                <Text>
                    Address
                </Text>
                <TextInput
                    placeholder="blah blah blah"
                    value={address} 
                    style={styles.textInput}
                    onChangeText={setAddress}
                />

                <Text>
                    Occuption
                </Text>
                <TextInput
                    placeholder="Unemployed"
                    value={occupation} 
                    style={styles.textInput}
                    onChangeText={setOccupation}
                />

                <TouchableOpacity 
                    style={styles.buttonText}
                    onPress={navigation.navigate('KYCVerification')}
                >
                    <Text>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default KYCVerification;