import { Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/styles";
import EmptyNotification from "../../components/Notification/EmptyNotification";
import Notifications from "../../components/Notification/Notifications";
import { useState } from "react";

const NotificationScreen = () => {
    const [isNotified, setIsNotified] = useState(false)
    const [notification, setNotification] = useState([Notifications])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.notification_headerText}>
                Notification
            </Text>
            <ScrollView style={styles.notificationBody} >
                {isNotified 
                    ? (notification.map((id) => (
                        <Notifications key={id} />
                    )))
                    : <EmptyNotification />
                }

            </ScrollView>
        </SafeAreaView>

    )
}

export default NotificationScreen;