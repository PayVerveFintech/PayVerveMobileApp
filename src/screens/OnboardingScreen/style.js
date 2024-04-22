import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 250,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        marginTop: 15,
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
        resizeMode: 'cover'
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

    loginButton: {
        height: 50,
        width: 160,
        left: 10,
        borderColor: '#2196F3',
        borderRadius: 8,
        borderWidth: 1
    },
});