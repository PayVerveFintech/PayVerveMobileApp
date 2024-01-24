import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: 'white',
        marginTop: 15
    },

    imageHeader: {
        alignSelf: 'center',
        marginTop: 45
    },

    signupButton: {
        backgroundColor: '#2196F3',
        width: 200,
        height: 50,
        elevation: 10,
        borderRadius: 8,
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 40,
        marginBottom: 10
    },

    touchableOpacityText: {
        color: 'white', 
        fontWeight: 'bold',                 
        fontSize: 25, 
        alignSelf: 'center',
        padding: 10
    },
});

export default Styles;