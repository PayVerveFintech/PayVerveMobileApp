import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputBox from "../../components/InputBox"
import { Button } from "../../components/ButtonComponent/Button"
import { useEffect, useState } from "react"
import SuccessfulModal from "../../components/ModalComponent/SuccessfulModal"
import { styles } from "./styles"
import Header from "../../components/HeaderComponent"

const ChangeTransactionPin = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [oldPin, setOldPin] = useState("")
    const [newPin, setNewPin] = useState("")
    const [confirmPin, setConfirmPin] = useState("")

    useEffect(()=>{
        let modalTimer;
        
        if (modalVisible === true) {
            modalTimer = setTimeout(()=>{
                    setModalVisible(false)
                }, 3000)
        }

        return () => {
            clearTimeout(modalTimer)
        };

    }, [modalVisible])

    //capture old pin value
     const handleOldPin = (text) => {
        setOldPin(text)
    };

    //capture new pin value
    const handleNewPin = (text) => {
        setNewPin(text)
    };

    //capture confirm pin value
    const handleConfirmPin = (text) => {
        setConfirmPin(text)
    };


    //function to open modal on success
    const openModal = () => {
        //logic for Pin change
        setModalVisible(true)
    }

  return (
    <SafeAreaView style={styles.container}>
        <Header title="Change Transaction Pin" />
        <View style={styles.formContainer}>
            <InputBox 
                label="Old Transaction Pin" 
                placeholder="Old Transaction Pin" 
                onChangeText={handleOldPin}
                value={oldPin}
            />
            
            <InputBox 
                label="New Transaction Pin" 
                placeholder="New Transaction Pin" 
                onChangeText={handleNewPin}
                value={newPin}
            />

            <InputBox 
                label="Confirm New Transaction Pin" 
                placeholder="Confirm New Transaction Pin" 
                onChangeText={handleConfirmPin}
                value={confirmPin}
            />

        </View>

        <Button btn_text="Change" onPress={openModal} />
        
        {modalVisible && <SuccessfulModal visible={modalVisible} change="transaction pin" />}
    </SafeAreaView>
  )
}

export default ChangeTransactionPin