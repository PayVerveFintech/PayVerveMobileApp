import { StyleSheet } from "react-native";
  
// primaryColor = rgba(33, 150, 243, 1)
// primaryColor-1 = #2196F3

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },

    logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    },

    bg_circle: {
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 30,
        marginRight: 50,
        width: 300,
        height: 300,
        borderRadius: 170,
        backgroundColor: 'linear-gradient(180deg, rgba(33, 150, 243, 0.80) -151.46%, rgba(255, 255, 255, 0.40) 77.19%)',
    },
    onboarding_bg_img: {
        marginTop: 90,
        paddingTop: 50,
        height: 500,
        width: 250,
        // alignContent: 'center',
        resizeMode: 'cover'
    },

    header_Text_1: {
        fontSize: 22,
        paddingTop: 50,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    header_Text_2: {
        fontSize: 20,
        paddingTop: 20,
        paddingLeft: 50,
        paddingRight: 50,
        textAlign: 'center',
    },

    onboarding_body_txt: {
        fontSize: 50,
        fontWeight: 'bold',
        paddingRight: 70,
        paddingTop: 50
    },

    signUpButton: {
        backgroundColor: '#2196F3',
        width: 161,
        height: 50,
        elevation: 10,
        borderRadius: 8,
        marginRight: 10
    },

    loginButton: {
        height: 50,
        width: 161,
        // elevation: 10,
        borderColor: '#2196F3',
        borderRadius: 8,
        borderWidth: 1
    },

    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    textInput: {
        height: 40,
        width: 271,
        marginVertical: 10,
        borderWidth: 1,
        // borderColor: '#205922',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },
      
    notification_headerText: {
        fontSize: 30,
        fontWeight: '600',
        paddingHorizontal: 10,
        alignItems: 'center'
    },

    notificationBody: {
        height: '100%',
        marginTop: 40,
        gap: 23
        
    },
  
    data_screen: {
        gap: 23,
    },

    data_form_input_wrapper: {
        gap: 8
    },

    data_form_label: {
        fontSize: 16,
    },

    data_form_text_right: {
        textAlign: "right",
        fontSize: 12
    },

    data_form_input: {
        borderColor: "#101820",
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        height: 46,
    },

    successful_screen_wrapper: {
        height: 600,
        alignItems: "center",
        justifyContent: "center",
        gap: 23,
    },

    successful_screen_text: {
        fontSize: 18,
        fontWeight: "700"
    },
  
    accounts_wrapper: {
        gap: 23
    },

    bill_type: {
        flex: 1,
        gap: 12
    },

    select_meter_wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 24,
    },

    select_meter_btn: {
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        width: 159,
        height: 45,
        alignItems: "center",
        justifyContent: "center"

    },

    selectedMeter: {
        backgroundColor: "#2196F3",
    },

    select_meter_text: {
        fontSize: 18,
        fontWeight: "700"
    },

    headerTitleStyle: {
        fontSize: 22,
        fontWeight: "700"
    }

})