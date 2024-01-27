import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#FFF"
    },

    walletScreen: {
        flex: 1,
    },

    walletTypeWrapper: {
        flex: 3,
        gap: 12,
    },

    walletAgreement: {
        flex: 2,
        alignItems: "center",
    },

    walletAgreementText: {
        fontSize: 16,
    },

    walletTAndC: {
        fontSize: 16,
        color: "#2196F3"
    }
})