import { Modal, Text, View, Pressable } from "react-native"
import { styles } from "./styles"
import { EvilIcons } from '@expo/vector-icons';

const CameraPermission = ({ visible, onClose, allowAccess, denyAccess }) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
    >
        <View style={styles.centeredView}>
            <View style={[styles.modalView, styles.cameraModalView]}>
                <View style={styles.cameraPermissionWrapper}>
                    <EvilIcons name="camera" size={50} color="#134563" />

                    <View style={styles.cameraPermissionText}>
                        <Text style={styles.modalHeaderText}>Enable Camera</Text>
                        <Text style={[styles.TandC, {textAlign: "center"}]}>Kindly provide us access to your camera to take picture.</Text>
                    </View>
                </View>

                <View style={styles.permissionBtnContainer}>
                    <Pressable 
                        style={styles.permissionBtn}
                        onPress={denyAccess}
                    >
                        <Text style={[styles.permissionText, {color: "#101820"}]}>Maybe Later</Text>
                    </Pressable>

                    <Pressable 
                        style={[styles.permissionBtn, {backgroundColor: "#2196F3"}]}
                        onPress={allowAccess}
                    >
                        <Text style={[styles.permissionText, {color: "#FFF"}]}>Enable</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    </Modal>
  )
}

export default CameraPermission