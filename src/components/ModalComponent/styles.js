import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    tandcModalView: {
        flex: 1,
        width: 370,
        alignSelf: "center",
        padding: 24,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        backgroundColor: "#FFF",
        marginTop: 80,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 2,
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

    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 8,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    cameraModalView: {
        height: 287,
        paddingVertical: 12,
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

    successfulModalView: {
        height: 219,
        width: 340,
        paddingVertical: 32,
        paddingHorizontal: 12
    },

    successfulScreenWrapper: {
        alignItems: "center",
        justifyContent: "center",
        gap: 23,
    },

    successfulScreenText: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
    },

    referralPointModal: {
        width: 254,
        height: 151,
        paddingVertical: 23,
        paddingHorizontal: 12
    },

    referralModalHeader: {
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
    },

    referralButtonFlex: {
        flexDirection: "row",
        gap: 15
    },

    referralButton: {
        paddingVertical: 12,
        paddingHorizontal: 10,
        color: "#101820",
        borderRadius: 8,
        width: 107,
        justifyContent: "center",
        alignItems: "center",
    },


    dataButton: {
        borderWidth: 1,
        borderColor: "#2196F3",
        color: "#101820"
    },

    airtimeButton: {
        backgroundColor: "#2196F3",
        color: "#101820"
    },

    feedbackModal: {
        height: 250,
        paddingVertical: 32,
        paddingHorizontal: 12,
        
    },

    feedbackModalWrapper: {
        alignItems: "center",
        justifyContent: "center",
        gap: 23
    },
    
    feedbackModalTextWrapper: {
        alignItems: "center"
    },

    feedbackModalText: {
        fontSize: 18,
        fontWeight: "700", 
        textAlign: "center"
    },

})