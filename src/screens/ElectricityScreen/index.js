import { View, Text, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/ButtonComponent/Button"
import InputBox from "../../components/InputBox";
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"
import { useState } from "react"
import Header from "../../components/HeaderComponent";


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
            <Header title="Electricity" />
            
            <View style={styles.meterScreen}>
                {/* replace with dropdown component */} 
                <InputBox 
                    label="Select Service Provider"
                    placeholder="Select Service Provider"
                />

                <View style={styles.meterTypeWrapper}>
                    <Text style={styles.meterTypeLabel}>Select Meter</Text>
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

                <InputBox 
                    label="Meter Number"
                    placeholder="123456789"
                />

                <InputBox 
                    label="Amount"
                    placeholder="123456789"
                />

                <Button btn_text="Proceed" onPress={whenPress} />
            </View>
        </SafeAreaView>
    )
}

export default ElectricityScreen