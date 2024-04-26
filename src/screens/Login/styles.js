import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




const Styles = StyleSheet.create ({
    container: {
        flex: 1,
    },
    loginForgetPSW_txt: { 
        alignSelf: 'flex-end', 
        marginEnd: 30, 
        fontSize: 18,
        fontWeight: 'bold',
        textDecorationLine: 'underline'
    },
    
    loginSignUp_outer_txt: {
        alignSelf: 'center', 
        fontSize: 14
    },

    loginSignUp_inner_txt: {
        color: 'blue', 
        fontWeight: 'bold', 
        fontSize: 16, 
        fontWeight: 'bold', 
        textDecorationLine: 'underline'
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
        marginBottom: 10,
    },
});

export default Styles;