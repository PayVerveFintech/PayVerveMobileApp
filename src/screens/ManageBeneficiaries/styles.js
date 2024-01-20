import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF"
    },

    benficiariesList: {
        flex: 1,
        // gap: 14
    },

    addWalletButton: {
        width: 50,
        height: 50,
        backgroundColor: "#2196F3",
        borderRadius: 50 / 2,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-end",
        position: "absolute",
        bottom: 0
    },

    emptyView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    noBeneficiary: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700"
    },
})