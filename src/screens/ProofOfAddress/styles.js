import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#FFF"
    },

    headerText: {
        fontSize: 16, 
        textAlign: "center",
        width: 342, 
        alignSelf: "center"
    },

    mediaWrapper: {
        gap: 12,
        height: 228 * 2 + 12
    },

    imageAvailable: {
        borderRadius: 8,
        height: 228
    },

    mediaInfoBox: {
        borderRadius: 8,
        gap: 12,
        height: 114,
        backgroundColor: "#F9F9F9",
        justifyContent: "center",
        alignItems: "center"
    },

    capturedImage: {
        height: 228,
        borderRadius: 8
    }
})