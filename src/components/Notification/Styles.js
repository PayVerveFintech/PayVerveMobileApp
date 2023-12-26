import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    empty_notification: {
        flex: 1,
        gap: 23,
        alignItems: 'center',
        justifyContent: 'center'
    },

    no_notification_text: {
        fontSize: 18,
        fontWeight: '700'
    },

    imageSize: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    notification_wrappper: {
        flexDirection: 'row',
        width: "100%",
        padding: 10,
        gap: 10,
        alignItems: 'flex-start'
    },

    notification_user_img: {
        width: 50,
        borderRadius: 50,
        height: 50,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

    notification_title: {
        fontSize: 16,
        fontWeight: '700'
    },

    notification_subject: {
        fontSize: 12
    },

    notification_body: {
        fontSize: 16,
        textAlign: "center",
        lineHeight: 19
    },

    close_notification_btn: {
        backgroundColor: '#2196F3',
        padding: 10,
        textAlign: 'center',
        borderRadius: 8,
        width: '100%',
        height: 40
    },

    close_text: {
        color: 'white',
        textAlign: 'center'
    },
    
    notification_modal: {
        alignItems: 'center',
        gap: 14,
        padding: 24,
        borderRadius: 8,
        marginTop: '50%',
        margin: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
})

export { styles }