import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputBox from "../../components/InputBox"
import { Button } from "../../components/ButtonComponent/Button"
import { styles } from "./styles"
import { useEffect, useState } from "react"
import SuccessfulModal from "../../components/ModalComponent/SuccessfulModal"
import Header from "../../components/HeaderComponent"

const ChangePassword = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

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

    //capture old password value
    const handleOldPassword = (text) => {
        setOldPassword(text)
    };

    //capture new password value
    const handleNewPassword = (text) => {
        setNewPassword(text)
    };

    //capture confirm password value
    const handleConfirmPassword = (text) => {
        setConfirmPassword(text)
    };

    //function to open modal on success
    const openModal = () => {
        //logic for password change
        setModalVisible(true)
    }




  return (
    <SafeAreaView style={styles.container}>
        <Header title="Change Password" />
        
        <View style={styles.formContainer}>
            <InputBox 
                label="Old Password" 
                placeholder="Old Password"
                onChangeText={handleOldPassword}
                value={oldPassword} 
            />
            
            <InputBox 
                label="New Password" 
                placeholder="New Password" 
                onChangeText={handleNewPassword}
                value={newPassword}
            />
            
            <InputBox 
                label="Confirm Password" 
                placeholder="Confirm Password" 
                onChangeText={handleConfirmPassword}
                value={confirmPassword}
            />
        </View>

        <Button btn_text="Change" onPress={openModal} />

        {modalVisible && <SuccessfulModal visible={modalVisible} change ="password" />}
    </SafeAreaView>
  )
}

export default ChangePassword