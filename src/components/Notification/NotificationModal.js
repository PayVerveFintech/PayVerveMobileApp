import { View, Image, Text, Pressable } from 'react-native'
import { styles } from './Styles'

const NotificationModal = ({ closeModal }) => {

  return (
    <View style={styles.notification_modal}>
        <Image source={require('../../../assets/notification-user-img.png')} style={styles.notification_user_img} />
        <Text style={styles.notification_title}>You deserve all the enjoyment</Text>
        <Text style={styles.notification_body}>You've worked hard enough this year so you deserve something nice.
            Enjoy zero transaction on all card payments collections <Text style={styles.notification_title}>Merry Christmas</Text>.
        </Text>
        <Pressable style={styles.close_notification_btn} onPress={closeModal}>
            <Text style={styles.close_text}>Close</Text>
        </Pressable>
    </View>
  )
}

export default  NotificationModal