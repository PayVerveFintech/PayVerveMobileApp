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
        fontSize: hp(2.8),
        fontWeight: "700",
        marginBottom: hp(0)
    },
    date: {
        fontSize: hp(2.4),
        fontWeight: "400",
        color: Color.gray,
        marginBottom: hp(2),
        marginTop: hp(3)
    },
    icon: {
        marginRight: wp(3)
    },
    label: {
        fontSize: hp(2.4),
        fontWeight: "400"
    },
    transactionDetailsContainer: {
        justifyContent: "center"
    },
    name: {

        fontWeight: "500",
        fontSize: hp(2.7)
    },
    amountContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    amount: {
        color: Color.red,
        fontSize: hp(2.4),
        fontWeight: "500"
    },
    transactionType: {
        color: Color.red,
        fontSize: hp(2.2),
        fontWeight: "400"
    },
    noHistoryContainer: {
        marginTop: hp(10),
        alignItems: "center",
        justifyContent: "center"
    },noHistoryLabel: {
        fontSize: hp(2.8),
        fontWeight: "700",
        marginBottom: hp(2)
    },
    noHistory: {
        fontSize: hp(2.4),
        fontWeight: "400"
    }
})