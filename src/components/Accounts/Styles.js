import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    account_type_wrapper: {
        backgroundColor: "#F9F9F9",
        paddingVertical: 24,
        paddingHorizontal: 8,
        gap: 12,
        borderRadius: 8,
        shadowColor: "#101820",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5
    },

    account_type_text: {
        fontSize: 18,
        color: "#000",
    },

    account_number_flex: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    account_number: {
        fontSize: 18,
        fontWeight: "700"
    },

    copy_account_number: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-end",
    }
})