import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    camera: {
        flex: 1,
        width: "100%",
    },

    cameraButtons: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        flex: 1,
        width: "100%",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
    },

    captureWrapper: {
        alignSelf: "center",
        flex: 1,
        alignItems: "center",
    },

    capture: {
        alignItems: "center",
        width: 60,
        height: 60,
        bottom: 0,
        borderRadius: 50,
        backgroundColor: "#FFF",
    }, 


})