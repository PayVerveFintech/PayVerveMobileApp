import { StyleSheet } from "react-native";

// primaryColor = rgba(33, 150, 243, 1)
//

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1
    },

    logo: {
        height: "30%",
        width: "30%",
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
    },

    onboarding_bg_img: {
        height: "30%",
        width: "30%",
        alignItems: 'center'
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
        fontSize: 60,
        fontWeight: 'bold',
        paddingRight: 70
    },

    signUpButton: {
        backgroundColor: 'blue',
        width: 50,
        elevation: 10,
        borderRadius: 8
    },

    loginButton: {
        width: 50,
        elevation: 10,
        borderRadius: 8
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
    }
})