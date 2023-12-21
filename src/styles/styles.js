import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#fff",
        color: "#000"
    },

    data_screen: {
        gap: 23,
    },

    data_form_input_wrapper: {
        gap: 8
    },

    data_form_label: {
        fontSize: 16,
    },

    data_form_text_right: {
        textAlign: "right",
        fontSize: 12
    },

    data_form_input: {
        borderColor: "#101820",
        borderWidth: 1,
        padding: 10,
        borderRadius: 4,
        height: 46,
    },

    successful_screen_wrapper: {
        height: 600,
        alignItems: "center",
        justifyContent: "center",
        gap: 23,
    },

    successful_screen_text: {
        fontSize: 18,
        fontWeight: "700"
    }
    
})