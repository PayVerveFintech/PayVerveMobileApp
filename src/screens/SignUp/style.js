import { StyleSheet } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




export const styles = StyleSheet.create({
    signupContainer: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: hp(5),
        paddingHorizontal: wp(3)
    },
    signUp: {
        fontSize: 18,
        fontWeight: "900",
        alignSelf: "center"
    },
    desc: {
        marginTop: hp(1),
        fontSize: 16,
        fontWeight: "500",
        textAlign: "center"
    },
    signUpcontainer1: {
        flex: 1
    },

    signupTexts: {
        fontSize: 18,
        fontWeight: 'bold'
    },

    signupButton: {
        backgroundColor: '#2196F3',
        width: 160,
        height: 50,
        elevation: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 40,
        marginBottom: 10
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

    touchableOpacityText: {
        color: 'white', 
        fontWeight: 'bold',                 
        fontSize: 25, 
        alignSelf: 'center',
        padding: 10
    },

});
