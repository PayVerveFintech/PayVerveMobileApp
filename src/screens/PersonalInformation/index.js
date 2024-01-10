import { View, Text, ScrollView, Image  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/ButtonComponent/Button";
import { styles } from "../../styles/styles";
import InputBox from "../../components/InputBox"
import { useNavigation } from "@react-navigation/native";
import { PersonalInfoProgress } from "../../components/PersonalInfoProgress";

const PersonalInformation = () => {
    const navigation = useNavigation()

    //function to progress
    const whenPress = () => {
        navigation.navigate("Proof of Address")
    }
    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{gap: 32}}>
                
                <PersonalInfoProgress screen="personal" />

                <View style={styles.bill_type}>
                    <InputBox label="Full Name" placeholder="Benita Ajagunna" />
                    <InputBox label="Email Address" placeholder="benitaajagunna@gmail.com" />
                    <InputBox label="Phone Number" placeholder="0123456789" />
                    <InputBox label="NIN" placeholder="01234567890" />
                    <InputBox label="Gender" placeholder="Female" />
                    <InputBox label="D.O.B" placeholder="mm/dd/yyyy" />
                    <InputBox label="Address" placeholder="Lagos, Nigeria" />
                        {/* replace with dropdown component */}
                    <InputBox label="Occupation" placeholder="Employed" />
                    <InputBox label="Declaration of Purpose" placeholder="write here" />

                </View>

                <Button btn_text="Next" onPress={whenPress} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default PersonalInformation