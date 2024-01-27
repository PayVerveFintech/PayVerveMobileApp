import { TouchableOpacity, Image, View, Text, Modal } from "react-native"
import { styles } from "./styles"
import NotificationModal from "./NotificationModal"
import { useState } from "react"

const Notifications = () => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(!showModal)
    }

    return (
        <View style={{flex: 1}}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={showModal}
                onRequestClose={openModal}
            >
                <NotificationModal closeModal={openModal} />
            </Modal>

            <TouchableOpacity style={styles.notification_wrappper} onPress={openModal}>
                <Image source={require('../../../assets/notification-user-img.png')} style={styles.notification_user_img} />
                <View>
                    <Text style={styles.notification_title}>You deserve all the enjoyment</Text>
                    <Text>You've worked hard enough this year so you deserve something nice.</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Notifications