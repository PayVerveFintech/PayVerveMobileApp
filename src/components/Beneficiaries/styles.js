import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    accountDetails: {
        gap: 8,
        width: "70%",
    },

    accountName: {
        fontSize: 16,
        fontWeight: "700"
    },

    bankDetails: {
        fontSize: 12
    }
})