import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        width: 390,
        alignSelf: "center",
        padding: 24,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#FFF",
    },

    modalWrapper: {
        gap: 32,

    },

    modalHeader: {
        alignItems: "center",
        gap: 23,
    },

    modalHeaderText: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
    },

    modalBody: {
        gap: 23,
        color: "#101820",
    },

    TandC: {
        fontSize: 16
    },

    agreement: {
        flexDirection: "row",
        gap: 8,
        alignItems: "center"
    }, 

    permissionBtnContainer: {
        gap: 8,
        justifyContent: "center"
    },

    cameraPermissionWrapper: {
        gap: 18,
        paddingHorizontal: 8,
        paddingVertical: 12,
        alignItems: "center",
    },

    permissionBtn: {
        width: 101,
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 12,
        borderRadius: 8,
    },

    permissionText: {
        fontSize: 12,
        textAlign: "center"
    }, 

    cameraModalView: {
        margin: 20,
        height: 287,
        backgroundColor: "white",
        borderRadius: 8,
        paddingVertical: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        gap: 12
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    cameraPermissionText: {
        alignItems: "center",
        gap: 12,
        color: "#101820",
        paddingHorizontal: 8
    },

})