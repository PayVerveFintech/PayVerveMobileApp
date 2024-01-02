import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bill_type_container: {
        flexDirection: "row",
        backgroundColor: "#F9F9F9",
        height: 56,
        gap: 12,
        alignItems: "center",
        padding: 12,
        borderRadius: 8,
        borderBottomWidth: 1.5,
        borderBottomColor: "#00000040",

    },

    bill_type_icon: {
        width: 20,
        height: 20
    },

    bill_type_text: {
        fontSize: 18
    }
})