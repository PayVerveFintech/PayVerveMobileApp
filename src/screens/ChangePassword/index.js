import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputBox from "../../components/InputBox"
import { Button } from "../../components/ButtonComponent/Button"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import SuccessfulModal from "../../components/ModalComponent/SuccessfulModal"

const ChangePassword = () => {
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
            <InputBox label="Old Password" placeholder="Old Password" />
            
            <InputBox label="New Password" placeholder="New Password" />
            
            <InputBox label="Confirm Password" placeholder="Confirm Password" />
        </View>

        <Button btn_text="Change" onPress={openModal} />

        {modalVisible && <SuccessfulModal visible={modalVisible} change ="password" />}
    </SafeAreaView>
  )
}

export default ChangePassword