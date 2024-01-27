import { View, Image, Text } from "react-native"
import { styles } from "./styles"


const EmptyNotification = () => {
    return (
        <View style={{height: 700}}>
            <View style={styles.empty_notification} >
                <Image source={require('../../../assets/Sleeping-Face.png')} style={styles.imageSize} />
                <Text style={styles.no_notification_text}>No New Notification</Text>
            </View>
        </View>
    )
}

export default EmptyNotification