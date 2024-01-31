import { View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputBox from "../../components/InputBox"
import Header from "../../components/HeaderComponent"
import { useState } from "react"
import { styles } from "./styles"

const Profile = () => {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
        

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

    //capture username value
    const handleUsername = (text) => {
        setUsername(text)
    };

    //capture password value
    const handlePassword = (text) => {
        setPassword(text)
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Profile" />
            
            <View style={styles.profileWrapper}>
                <InputBox 
                    label="Name"
                    placeholder="Full Name"
                    onChangeText={handleFullname}
                    value={fullname}
                />

                <InputBox 
                    label="Email Address"
                    placeholder="you@email.com"
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
                    label="Username"
                    placeholder="username"
                    onChangeText={handleUsername}
                    value={username}
                />

                <InputBox 
                    label="Password"
                    placeholder="password"
                    onChangeText={handlePassword}
                    value={password}
                    
                />

            </View>

            <Text style={styles.profileInfo}>
                To make changes send a message to Benitaajagunna@gmail.com 
                stating your reasons for a change
            </Text>
        </SafeAreaView>
    )
}

export default Profile