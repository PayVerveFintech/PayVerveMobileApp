import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";






export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white,
    },
    header: {
        marginTop: hp(2.8),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    container: {
        paddingHorizontal: wp(3)
    },
    welcomeText: {
        fontSize: hp(3.8),
        fontWeight: "700",
        color: Color.black
    },
    name: {
        fontSize: hp(3),
        fontWeight: "400",
        color: Color.gray
    },
    accountDetailsContainer: {
        backgroundColor: Color.primary,
        height: hp(20),
        borderRadius: 8,
        marginTop: hp(3),
    },
    accountDetails: {
        width: wp(94),
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    accountType: {
        fontSize: hp(3.2),
        fontWeight: "400"
    },
    balance: {
        fontWeight: "700",
        fontSize: hp(3.5),
        marginTop: hp(2)
    },
    serviceRoot: {
        marginTop: hp(4.5)
    },
    label: {
        fontWeight: "700",
        fontSize: hp(2.7),
        marginBottom: hp(2)
    },
    serviceText: {
        fontSize: hp(2.2),
        fontWeight: "400",
        marginTop: hp(0.5)
    },
    serviceContainer: {
        justifyContent: "center", 
        alignItems: "center",
        width: wp(23.5),
        paddingVertical: hp(2.1)
    },
    serviceBg: {
        backgroundColor: Color.lightGray,
        height: hp(22)
    },
    history: {
        marginTop: hp(3)
    },
    hidden: {
        fontSize: hp(4),
        marginTop: hp(2)
    },
    dot: {
        width: 8,
        height: 8,
       backgroundColor: "#949191",
       borderRadius: 5,
       marginHorizontal: wp(1)
    },
    dotContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: hp(-2.5)
    },
    activeDot: {
        backgroundColor: "#2196F3",
        width: wp(4)
    }
})