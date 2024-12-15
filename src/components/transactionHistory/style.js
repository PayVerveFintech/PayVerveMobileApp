import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";







export const styles = StyleSheet.create({
    root: {
       
    },
    historyContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    historyDetailsContainer: {
        flexDirection: "row"
    },
    historyLabel: {
        fontSize: 16,
        fontWeight: "700",
        marginBottom: hp(0)
    },
    date: {
        fontSize: 13,
        fontWeight: "400",
        color: Color.gray,
        marginBottom: hp(2),
        marginTop: hp(2)
    },
    icon: {
        marginRight: wp(3)
    },
    label: {
        fontSize: 13,
        fontWeight: "400"
    },
    transactionDetailsContainer: {
        justifyContent: "center"
    },
    name: {

        fontWeight: "500",
        fontSize: 15
    },
    amountContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    amount: {
        color: Color.red,
        fontSize: 15,
        fontWeight: "500"
    },
    transactionType: {
        color: Color.red,
        fontSize: 13,
        fontWeight: "400"
    },
    noHistoryContainer: {
        marginTop: hp(5),
        alignItems: "center",
        justifyContent: "center"
    },
    noHistoryLabel: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: hp(2)
    },
    noHistory: {
        fontSize: 14,
        fontWeight: "400"
    }
})