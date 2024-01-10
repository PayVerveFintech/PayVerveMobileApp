import { View, Text, TextInput, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"
import { styles } from "../../styles/styles"
import { useState } from "react"


const ElectricityScreen = () => {
    const [selectMeter, setSelectMeter] = useState("prepaid")

    const navigation = useNavigation()

    const switchSelectMeter = (option) => {
        if (option === "prepaid" && selectMeter !== "prepaid") {
            setSelectMeter("prepaid");
        } else if (option === "postpaid" && selectMeter !== "postpaid") {
            setSelectMeter("postpaid");
        }
    }

    const whenPress = () => {
        // logic to pass information to review screen
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

                <View style={styles.data_form_input_wrapper}>
                    <Text style={styles.data_form_label}>Select Meter</Text>
                    <View style={styles.select_meter_wrapper}>
                        <Pressable 
                            onPress={() => switchSelectMeter("prepaid")} 
                            style={[styles.select_meter_btn, selectMeter === "prepaid" ? styles.selectedMeter : null  ]}
                        >
                            <Text style={styles.select_meter_text}>Prepaid</Text>
                        </Pressable>

                        <Pressable 
                            onPress={() => switchSelectMeter("postpaid")} 
                            style={[styles.select_meter_btn, selectMeter === "postpaid" ? styles.selectedMeter : null  ]}
                        >
                            <Text style={styles.select_meter_text}>Postpaid</Text>
                        </Pressable>
                    </View>
                </View>

                <View style={styles.data_form_input_wrapper}>
                    <Text style={styles.data_form_label}>Meter Number</Text>
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

                <Button btn_text="Proceed" onPress={whenPress} />
            </View>
        </SafeAreaView>
    )
}

export default ElectricityScreen