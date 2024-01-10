import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    walletBoxWrapper: {
        flexDirection: "row",
        gap: 24,
        padding: 24,
        alignItems: "center",
        backgroundColor: "#E1F2FF",
        borderRadius: 8,
        height: 100
    },

    walletBoxBalance: {
        fontSize: 18,
        fontWeight: "700",
    },

    walletBoxType: {
        fontSize: 16,
    },

    walletTypeContainer: {
        flex: 2,
        gap: 12
    },

    walletContainer: {
        flexDirection: "row",
        gap: 24,
        alignItems: "center",
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 24,
        backgroundColor: "#F9F9F9",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    walletCheckbox: {
        width: 21,
        height: 21,
        borderRadius: 10,
        borderWidth: 1
    },

    walletChecked: {
        backgroundColor: "#2196F3",
        // borderWidth: 0
    },

    walletRequirement: {
        fontSize: 12,
        fontWeight: "700"
    },

    requirementDetails: {
        fontSize: 10
    }

})