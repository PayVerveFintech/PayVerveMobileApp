import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingTop: 100,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: "center",
        marginTop: 15
    },

    header_Text_1: {
        fontSize: 40,
        paddingTop: 50,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    img_checking: {
        alignSelf: "center"
    },

    signUpcontainer1: {
        alignContent: 'center',
        paddingLeft: 20,
        paddingBottom: '100%',
        marginTop: 40
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
        // marginTop: 40,
        // marginBottom: 10
    },

    touchableOpacityText: {
        color: 'white', 
        fontWeight: 'bold',                 
        fontSize: 25, 
        alignSelf: 'center',
        padding: 10
    },

    
});