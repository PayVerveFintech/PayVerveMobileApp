import { Modal, Text, View, Pressable, Image } from "react-native"
import { Button } from "../ButtonComponent/Button"
import announcement from "../../../assets/Announcement.png"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";


const TandCModal = ({ visible, onClose, onPress, account }) => {
    const [isChecked, setIsChecked] = useState(false)

    //function to toggle checkbox
    const toggleCheckbox = () => {
            setIsChecked(!isChecked)
    }

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
    >
        <View style={styles.modalView}>
            <View style={styles.modalWrapper}>

                <View style={styles.modalHeader}>
                    <Image source={announcement} />
                    <Text style={styles.modalHeaderText}>Things you should know before you open a PayVerve {account}account</Text>
                </View>

                <View style={styles.modalBody}>
                    <Text style={styles.TandC}>
                        You are required to pay a sum of 1000 NGN to create your {account}
                        account which will automatically be deducted once your account has 
                        been successfully created. 
                    </Text>
                    <Text style={styles.TandC}>We would need you to upload a valid government-issued ID and proof of your address.</Text>
                    <Text style={styles.TandC}>You are to upload a high-quality picture of your document.</Text>
                    <Text style={styles.TandC}>When taking a selfie of yourself ensure your background is clear.</Text>
                    <Text style={styles.TandC}>
                        You understand that we're required by law to verify your identity 
                        with your ID and proof of address. We will ask you to re-upload any 
                        document that doesn't meet our requirement, Thank you.
                    </Text>
                </View>

                <View style={styles.agreement}>
                    <Pressable 
                        onPress={toggleCheckbox}
                    >
                        <MaterialIcons name={isChecked ? "check-box" : "check-box-outline-blank"} size={25} color="#949191" />
                    </Pressable>
                    <Text style={styles.TandC}>By clicking you agree to the following</Text>
                </View>
                
                <Button btn_text="Next" onPress={onPress} disabled={!isChecked}/>
            </View>
        </View>
    </Modal>
  )
}

export default TandCModal