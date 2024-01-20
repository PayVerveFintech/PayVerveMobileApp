import { View, Text, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../../styles/styles"
import InputBox from "../../components/InputBox";

const CableTvScreen = () => {
    const navigation = useNavigation()

    const whenPress = () => {
        //logic to pass information to review screen
        navigation.navigate("Review")
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.data_screen}>
                 {/* replace with dropdown component */}
                <View style={styles.data_form_input_wrapper}>
                    <Text style={styles.data_form_label}>Select Service Provider</Text>
                    <TextInput 
                        placeholder="Select Service Provider"
                        style={styles.data_form_input}
                    />
                </View>

                <InputBox 
                    label="Smartcard Number"
                    placeholder="123456789"
                />

                {/* replace with dropdown component */}
                <View style={styles.data_form_input_wrapper}> 
                    <Text style={styles.data_form_label}>Select Package</Text>
                    <TextInput 
                        placeholder="Select Package"
                        style={styles.data_form_input}
                    />
                </View>

                <InputBox 
                    label="Amount"
                    placeholder="123456789"
                />

                <Button btn_text="Proceed" onPress={whenPress} />
            </View>
        </SafeAreaView>
    )
}

export default CableTvScreen