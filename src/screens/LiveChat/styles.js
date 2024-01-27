import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF",
    },

    chatInterface: {
        flex: 1,
    },

    inputWrapper: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        position: "absolute",
        bottom: 0,
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 12
    }, 

    textInput: {
        flex: 2,
    },

    botMessageContainer: {
        width: 290
    },

    botMessage: {
        fontSize: 18,
        fontWeight: "700"
    },
})