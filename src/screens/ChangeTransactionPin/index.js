import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputBox from "../../components/InputBox"
import { Button } from "../../components/ButtonComponent/Button"
import { useEffect, useState } from "react"
import SuccessfulModal from "../../components/ModalComponent/SuccessfulModal"
import { styles } from "./styles"

const ChangeTransactionPin = () => {
    const [modalVisible, setModalVisible] = useState(false)

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


    //function to open modal on success
    const openModal = () => {
        //logic for password change
        setModalVisible(true)
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.formContainer}>
            <InputBox label="Old Transaction Pin" placeholder="Old Transaction Pin" />
            
            <InputBox label="New Transaction Pin" placeholder="New Transaction Pin" />

            <InputBox label="Confirm New Transaction Pin" placeholder="Confirm New Transaction Pin" />

        </View>

        <Button btn_text="Change" onPress={openModal} />
        
        {modalVisible && <SuccessfulModal visible={modalVisible} change="transaction pin" />}
    </SafeAreaView>
  )
}

export default ChangeTransactionPin