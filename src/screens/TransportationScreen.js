import { View, Text, TextInput } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "../styles/styles"
import { Button } from "../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"


const TransportationScreen = () => {
    const navigation = useNavigation()

    const whenPress = () => {
        {/* logic to pass information to review screen */}
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
                
                {/* replace with dropdown component */}
                <View style={styles.data_form_input_wrapper}> 
                    <Text style={styles.data_form_label}>Package</Text>
                    <TextInput 
                        placeholder="123456789"
                        style={styles.data_form_input}
                    />
                </View>

                <View style={styles.data_form_input_wrapper}>
                    <Text style={styles.data_form_label}>Tag Number</Text>
                    <TextInput 
                        placeholder="123456789"
                        style={styles.data_form_input}
                    />
                </View>

                <View style={styles.data_form_input_wrapper}>
                    <Text style={styles.data_form_label}>Amount</Text>
                    <TextInput 
                        placeholder="123456789"
                        style={styles.data_form_input}
                    />
                </View>

                <Button btn_text="Proceed" onPress={whenPress}/>
            </View>
        </SafeAreaView>
    )
}

export default TransportationScreen