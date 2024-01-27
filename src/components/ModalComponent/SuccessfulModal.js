import { View, Text, Modal, Image } from "react-native"
import { styles } from "./styles"
import successful from "../../../assets/successful.png"


const SuccessfulModal = ({ visible, change }) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
    >
        <View style={styles.centeredView}>
            <View style={[styles.modalView, styles.successfulModalView]}>
                <View style={styles.successfulScreenWrapper}>
                    <Image source={successful} />

                    <View style={styles.cameraPermissionText}>
                        <Text style={styles.successfulScreenText}>Congratulations you've successfully changed your {change}.</Text>
                    </View>
                </View>

            </View>

        </View>
    </Modal>
  )
}

export default SuccessfulModal