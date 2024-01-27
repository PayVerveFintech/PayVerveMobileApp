import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF"
    },

    emptyHistory: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    emptyHistoryWrapper: {
        alignItems: "center",
        width: 266
    },

    emptyHistoryHeader: {
        fontSize: 18,
        fontWeight: "700"
    },

    emptyHistoryBody: {
        fontSize: 16,
        textAlign: "center"
    },

    referralHistoryHeader: {
        fontSize: 16,
        fontWeight: "700"
    },

    referralHistoryBody: {
        fontSize: 16
    },

    referralHistoryWrapper: {
        gap: 12,
        width: 312
    },
})