import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
// primaryColor = rgba(33, 150, 243, 1)
// primaryColor-1 = #2196F3

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: wp(3),
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        marginTop: 15
    },


    signupTexts: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    logo: {
        height: 150,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
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
        fontSize: 40,
        paddingTop: 50,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    header_Text_2: {
        fontSize: 20,
        paddingTop: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },

    finance_header_text_1: {
        fontSize: 35,
        paddingTop: 50,
        paddingLeft: 100,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    finance_header_text_2: {
        fontSize: 15,
        paddingTop: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },

    touchableOpacityText: {
        color: 'white', 
        fontWeight: 'bold',                 
        fontSize: 25, 
        alignSelf: 'center',
        padding: 10
    },

    onboarding_body_txt: {
        fontSize: 50,
        fontWeight: 'bold',
        paddingRight: 70,
        paddingTop: 50
    },

    onboardingSignUpButton: {
        backgroundColor: '#2196F3',
        width: 161,
        height: 50,
        elevation: 10,
        borderRadius: 8,
        marginRight: 10
    },

    signupButton: {
        backgroundColor: '#2196F3',
        width: 160,
        height: 50,
        elevation: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignSelf: "center",
        // marginTop: 40,
        // marginBottom: 10
    },

    loginButton: {
        height: 50,
        width: 160,
        left: 10,
        borderColor: '#2196F3',
        borderRadius: 8,
        borderWidth: 1,
    },

    buttonText: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    textInput: {
        height: 40,
        width: '92%',
        marginVertical: 10,
        borderWidth: 1,
        // borderColor: '#205922',
        borderRadius: 8,
        paddingHorizontal: 10,
        fontWeight: 'bold'
    },

    freeBold: {
        fontWeight: 'bold'
    },

    error: {
        color:'red',        
        justifyContent: "center",
        alignSelf: "center",        
        marginVertical: 10
    },
})