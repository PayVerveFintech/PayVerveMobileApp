import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#FFF",
        gap: 32
    },

    pointWrapper: {
        backgroundColor: "#E1F2FF",
        paddingVertical: 12,
        gap: 12,
        borderRadius: 8,
        paddingHorizontal: 24,

    },

    pointFlex: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },

    referralPointText: {
        fontSize: 16
    },

    referralTextBold: {
        fontSize: 18,
        fontWeight: "700"
    },

    referralInfoText: {
        fontSize: 12,
        color: "#101820"
    },

    usePointBtn: {
        width: 101,
        height: 40,
        borderWidth: 1,
        borderColor: "#2196F3",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 10,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"

    },

    referralInfoWrapper: {
        width: 340,
        height: 148,
        padding: 12,
        borderRadius: 8,
        gap: 8,
        backgroundColor: "#F9F9F9",
        color: "#101820", 
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

    referralInfoBody: {
        fontSize: 16,
        textAlign: "center"
    },

    claimBonus: {
        alignItems: "center",
        gap: 8,
        color: "#101820",
        marginTop: 24
    },

    claimBonusHeader: {
        fontSize: 16,
        fontWeight: "700"
    },

    claimBonusBody: {
        alignItems: "center"
    },

    claimBonusText: {
        fontSize: 12,
        textAlign: "center"
    },

    referralCta: {
        gap: 8,
        justifyContent: "center"
    },

    referralHistory: {
       alignSelf: "center" 
    },

    referralHistoryText: {
        fontSize: 12,
        color: "#2196F3"
    },

    

})