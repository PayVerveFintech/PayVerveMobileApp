import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    btn_wrapper: {
        alignItems: "center",
        marginTop: 20,
    },

    btn: {
        width: 200,
        height: 40,
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },

    active: {
        backgroundColor: "#2196F3"
    },

    inactive: {
        backgroundColor: "#949191"
    },

    btn_text: {
        color: "#fff",
        fontSize: 12
    },

    back_btn: {
        padding: 20,
    },
})