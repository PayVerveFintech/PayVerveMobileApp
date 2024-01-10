import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"
import { Wallet } from "../../components/WalletType/Wallet"
import { useState } from "react";
import usa from "../../../assets/USA.png"
import uk from "../../../assets/UK.png"
import { Button } from "../../components/ButtonComponent/Button";
import TandCModal from "../../components/ModalComponent/TandCModal";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../styles/styles";



const AddNewWallet = () => {
    const [dollarChecked, setDollarChecked] = useState(false)
    const [poundsChecked, setPoundsChecked] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)

    const onDollarChecked = () => {
        setDollarChecked(prev => !prev)
    }

    const onPoundsChecked = () => {
        setPoundsChecked(prev => !prev)
    }

    //function to open modal
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    }

    const account = []

    if (dollarChecked === true && poundsChecked === false) {
        account.push("Dollar ")
    }
    
    if (poundsChecked === true && dollarChecked === false) {
        account.push("Pounds ")
    }

    const navigation = useNavigation()

    const whenPress = () => {
        navigation.navigate("Personal Information")
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex: 1}}>
                <View style={{flex: 3, gap: 12}}>
                    <Wallet account= "Dollar" image={usa}  onPress={onDollarChecked} checked={dollarChecked}/>
                    <Wallet account= "Pounds" image={uk} onPress={onPoundsChecked} checked={poundsChecked}/>
                </View>

                {dollarChecked || poundsChecked 
                    ?   <View style={{alignItems: "center", flex: 2}}>
                            <Text style={{fontSize: 16}}>By Tapping "Next", you agree to PayVerve</Text>
                            <Pressable 
                            >
                                <Text style={{fontSize: 16, color: "#2196F3"}}>Terms and Conditions.</Text>
                            </Pressable>

                            <Button btn_text="Next" onPress={() => {setModalVisible(true)}}/>
                        </View>

                    : null
                }


                {modalVisible 
                    ? 
                        <TandCModal 
                            visible={modalVisible} 
                            onClose={toggleModal} 
                            onPress={whenPress}
                            account={account}
                        />
                    : null
                }
            </View>

        </SafeAreaView>
    )
}

export default AddNewWallet