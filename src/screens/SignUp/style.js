import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    signupContainer: {
        backgroundColor: 'white',
        marginTop: 15
    },

    header_Text_1: {
        fontSize: 40,
        paddingTop: 50,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    header_Text_2: {
        fontSize: 20,
        padding: 40,
        paddingTop: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },

    signUpcontainer1: {
        alignContent: 'center',
        paddingLeft: 20,
        paddingBottom: '100%',
        marginTop: 40
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
    error: {
        color:'red',        
        justifyContent: "center",
        alignSelf: "center",        
        marginVertical: 10
    },

});