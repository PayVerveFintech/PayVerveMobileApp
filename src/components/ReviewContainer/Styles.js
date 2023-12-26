import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        height: 300
    },

    review_container_flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12
    },

    review_description_left: {
        width: "50%",
    },

    review_description_right: {
        width: "50%",
        alignItems: "flex-end",
        padding: 10
    },

    review_desc_text: {
        fontSize: 16
    },

    review_debit_text: {
        fontSize: 12,
        color: "#FF1E1E"
    },

    review_text: {
        fontSize: 12,
        color: "#00FF1A"
    },

    review_text_number: {
        color: "#AFAFAF",
        fontSize: 12
    }

})