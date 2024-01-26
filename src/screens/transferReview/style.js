import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";




export const styles = StyleSheet.create({
    root: {
        backgroundColor: Color.white,
        flex: 1,
        paddingHorizontal: wp(3)
    },
    detailsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",   
        marginVertical: hp(1.5)
    },
    container: {
        marginTop: hp(5)
    },
    negative: {
        color: Color.red,
        fontSize: hp(2.6),
        fontWeight: "500"
    },
    positive: {
        color: Color.green,
        fontSize: hp(2.6),
        fontWeight: "500"
    },
    label: {
        fontSize: hp(2.8),
        fontWeight: "500"
    },
    number: {
        fontSize: hp(2.4),
        color: Color.gray,
        marginTop: hp(1)
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp(10),
        backgroundColor: Color.btnColor,
        marginHorizontal: hp(15),
        height: hp(6),
        borderRadius: 8
    },
    btnText: {
        color: Color.white,
        fontWeight: "700"
    },
    header: {
        flexDirection: "row",
        marginTop: hp(3),
        alignItems: "center"
    },
    title: {
        fontSize: hp(3),
        fontWeight: "700"
    },
    icon: {
        marginRight: wp(30)
    }
})