import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF",
        gap: 32
    },

    inputWrapper: {
        gap: 12
    },

    exchangeDetails: {
        gap: 8
    },

    exchangeRateFlex: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4
    },

    exchangeRate: {
        fontSize: 18,
        fontWeight: "700"
    },

    exchangeRateCurrency: {
        fontSize: 18
    },

    exchangeFromCurrency: {
        fontSize: 16
    },

    timeAndDate: {
        fontSize: 12
    },

})