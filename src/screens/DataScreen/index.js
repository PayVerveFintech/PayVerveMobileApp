import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { MobileNetworks } from "../../components/MobileNetworks/MobileNetworks";
import { Picker } from "@react-native-picker/picker";
import { Button } from "../../components/ButtonComponent/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useInfo } from "../../context/userInfo";
import InputBox from "../../components/InputBox";
import Header from "../../components/HeaderComponent";

const DataScreen = () => {
    const navigation = useNavigation()
    const route = useRoute()

    const [selectDataType, setSelectDataType] = useState()
    const [pointInput, setPointInput] = useState(false)

    //get value from contextAPI
    const { point } = useInfo()

    console.log(point)

    useEffect(()=>{
        if (route.params?.havePoints === "referPoints") {
            setPointInput(true)
        } else {
            setPointInput(false)
        }
    }, [route.params?.havePoints])

    // console.log("details:", route.params?.havePoints)

    const whenPress = () => {
        //logic to pass information to review screen
        navigation.navigate("Review", {details: "dataReview"})
    }
    

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Data" />
            <View style={styles.data_screen}>
                <Text style={{fontSize: 18}}>Select Network Provider</Text>

                <MobileNetworks />

                <View style={styles.data_screen}>
                    {pointInput 
                        ?   
                            <InputBox 
                                placeholder="Enter Point"
                                label="Point"
                                labelRight= {`Total point ${point}`}
                            />

                        : null
                    }

                    {/* replace with dropdown component */}
                    <View style={styles.data_form_input_wrapper}>
                        <Text style={styles.data_form_label}>Select a Package</Text>
                        <Picker 
                            style={styles.data_form_input}
                            selectedValue={selectDataType}
                            onValueChange={(itemValue, itemIndex) => {
                                setSelectDataType(itemValue)
                            }}
                        >
                            <Picker.Item label="10GB" value="10GB" />
                            <Picker.Item label="20GB" value="20GB" />
                            <Picker.Item label="40GB" value="40GB" />
                        </Picker>
                    </View>

                    <InputBox 
                        label="Amount"
                        placeholder="Enter Amount"
                        labelRight={pointInput ? `Point Amount ${"500"}` : `Balance ${"20,000"}`}
                    />

                    <InputBox 
                        label="Number"
                        placeholder="Enter Number"
                    />

                </View>

                <Button btn_text="Proceed" onPress={whenPress} />
            </View>
        </SafeAreaView>
    )
}

export default DataScreen
