import { View, ScrollView  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/ButtonComponent/Button";
import { styles } from "./styles";
import InputBox from "../../components/InputBox"
import { useNavigation } from "@react-navigation/native";
import { PersonalInfoProgress } from "../../components/PersonalInfoProgress";
import Header from "../../components/HeaderComponent";
import { useState } from "react";

const PersonalInformation = () => {
    const navigation = useNavigation()

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [NIN, setNIN] = useState("")
    const [gender, setGender] = useState("")
    const [DOB, setDOB] = useState("")
    const [address, setAddress] = useState("")
    const [occupation, setOccupation] = useState("")
    const [declaration, setDeclaration] = useState("")
        

    //capture fullname value
    const handleFullname = (text) => {
        setFullname(text)
    };

    //capture email value
    const handleEmail = (text) => {
        setEmail(text)
    };

    //capture phone number value
    const handlePhoneNumber = (text) => {
        setPhoneNumber(text)
    };

    //capture NIN value
    const handleNIN = (text) => {
        setNIN(text)
    };

    //capture gender value
    const handleGenderSelect = (text) => {
        setGender(text)
    };

    //capture DOB value
    const handleDOB = (text) => {
        setDOB(text)
    };

    //capture address value
    const handleAddress = (text) => {
        setAddress(text)
    };

    //capture occupation value
    const handleOccupationSelect = (text) => {
        setOccupation(text)
    };

    //capture declaration value
    const handleDeclaration = (text) => {
        setDeclaration(text)
    };


    //function to progress
    const whenPress = () => {
        navigation.navigate("Proof of Address")
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <Header title="Personal Information" />

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{gap: 32}}>
                
                <PersonalInfoProgress screen="personal" />

                <View style={styles.bill_type}>
                    <InputBox 
                        label="Full Name" 
                        placeholder="Benita Ajagunna" 
                        onChangeText={handleFullname}
                        value={fullname}
                    />

                    <InputBox 
                        label="Email Address" 
                        placeholder="benitaajagunna@gmail.com" 
                        onChangeText={handleEmail}
                        value={email}
                    />

                    <InputBox 
                        label="Phone Number" 
                        placeholder="0123456789" 
                        onChangeText={handlePhoneNumber}
                        value={phoneNumber}
                        keyboardType="number-pad"
                    />
                    
                    <InputBox 
                        label="NIN" 
                        placeholder="01234567890" 
                        onChangeText={handleNIN}
                        value={NIN}
                        keyboardType="number-pad"
                        // Icon={}
                    />

                        {/* replace with dropdown component */}
                    <InputBox 
                        label="Gender" 
                        placeholder="Female" 
                        onChangeText={handleGenderSelect}
                        value={gender}
                    />

                    <InputBox 
                        label="D.O.B" 
                        placeholder="mm/dd/yyyy" 
                        onChangeText={handleDOB}
                        value={DOB}

                    />

                    <InputBox 
                        label="Address" 
                        placeholder="Lagos, Nigeria" 
                        onChangeText={handleAddress}
                        value={address}
                    />

                        {/* replace with dropdown component */}
                    <InputBox 
                        label="Occupation" 
                        placeholder="Employed" 
                        onChangeText={handleOccupationSelect}
                        value={occupation}
                    />

                    <InputBox 
                        label="Declaration of Purpose" 
                        placeholder="write here" 
                        onChangeText={handleDeclaration}
                        value={declaration}
                    />

                </View>

                <Button btn_text="Next" onPress={whenPress} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonalInformation