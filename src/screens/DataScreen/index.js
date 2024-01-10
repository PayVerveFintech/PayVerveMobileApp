import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TextInput } from "react-native";
import { styles } from "../../styles/styles";
import { MobileNetworks } from "../../components/MobileNetworks/MobileNetworks";
import { Picker } from "@react-native-picker/picker";
import { Button } from "../../components/ButtonComponent/Button";
import { useNavigation } from "@react-navigation/native";

const DataScreen = () => {
    const navigation = useNavigation()

    const whenPress = () => {
        //logic to pass information to review screen
        navigation.navigate("Review")
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.data_screen}>
                <Text style={{fontSize: 18}}>Select Network Provider</Text>

                <MobileNetworks />

                <View style={styles.data_screen}>
                    {/* replace with dropdown component */}
                    <View style={styles.data_form_input_wrapper}>
                        <Text style={styles.data_form_label}>Select a Package</Text>
                        <Picker style={styles.data_form_input}>
                            <Picker.Item label="20GB" value="20GB" />
                        </Picker>
                    </View>

                    <View style={styles.data_form_input_wrapper}>
                        <Text style={styles.data_form_label}>Amount</Text>
                        <TextInput 
                            placeholder="Enter Amount" 
                            style={styles.data_form_input} 
                        />
                        <Text style={styles.data_form_text_right}>Balance {"20,000"}</Text>
                    </View>

                    <View style={styles.data_form_input_wrapper}>
                        <Text style={styles.data_form_label}>Number</Text>
                        <TextInput 
                            placeholder="Enter Number" 
                            style={styles.data_form_input} 
                        />
                    </View>
                </View>

                <Button btn_text="Proceed" onPress={whenPress} />
            </View>
        </SafeAreaView>
    )
}

export default DataScreen
