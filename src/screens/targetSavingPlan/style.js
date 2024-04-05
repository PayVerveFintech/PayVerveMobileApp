import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white,  
    },
    header: {
        marginTop: hp(3),
        alignItems: "center",
        flexDirection: "row"
    },
    icon: {
        marginLeft: wp(3),
        marginRight: wp(25)
    },
    title: {
        fontSize: hp(3),
        fontWeight: "700"
    },
    container: {
        height: hp(25),
        backgroundColor: "#f5f5f5",
        marginTop: hp(10),
        marginHorizontal: wp(3),
        borderRadius: 5,
        padding: 10,
    },
    saveContainer: {
        flexDirection: "row",
    },
    saveTitle: {
        fontSize: hp(2.8),
        marginTop: hp(2),
        color: Color.gray
    },
    saveAmount: {
        fontSize: hp(3),
        fontWeight: "600",
        marginVertical: hp(1)
    },
    saveInterestTitle: {
        color: Color.gray,
        fontWeight: "500"
    },
    saveInterest: {
        fontSize: hp(2.5),
        color: Color.gray,
        fontWeight: "700",
        marginVertical: hp(1)
    },
    durationTitle: {
        color: Color.gray,
        fontSize: hp(2.5),
        fontWeight: "600"
    },
    duration: {
        color: Color.gray,
        fontSize: hp(2.5),
        fontWeight: "600"
    },
    dateTitle: {
        color: Color.gray,
        fontWeight: "600",
        fontSize: hp(2.5)
    },
    date: {
        fontSize: hp(2.5)
    },
    durationContainer: {
        marginRight: wp(20)
    },
    addButton: {
        marginTop: hp(40),
        marginLeft: wp(80)
    },
    image: {
        width: 100,
        height: 100
    },
    CreateContainer: {
        // flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginVertical: hp(5)
    },
    contenContainer: {
        marginVertical: hp(3),
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: wp(3)
    },
    imageIcon: {
        width: 30,
        height: 30,
        marginHorizontal: wp(3)
    },
    text: {
        width: wp(80),
        fontSize: hp(2.4),
        lineHeight: hp(3.5)
    },
})