import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white
    },
    header: {
        marginTop: hp(3),
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginLeft: wp(3),
        marginRight: wp(25)
    },
    title: {
        fontSize: hp(3),
        fontWeight: "700"
    },
    networkContainer: {
        marginTop: hp(2)
    },
    networkMainContainer: {
        marginTop: hp(5),
    },
    networkTitle: {
        fontSize: hp(2.5),
        marginLeft: wp(3),
        fontWeight: "500"
    },
    amount: {
        marginLeft: wp(3),
        fontSize: hp(2.5)
    },
    flatlistContainer: {
        backgroundColor: "#f5f5f5",
        height: hp(23),
        marginTop: hp(2),
        alignItems: "center",
        marginHorizontal: wp(3),
        borderRadius: 4
    },
    airtimeAmount: {
        borderWidth: 1,
        paddingHorizontal: wp(5),
        paddingVertical: hp(1),
        width: wp(20),
        marginHorizontal: wp(5),
        marginVertical: hp(3),
        borderColor: Color.gray,
        borderRadius: 5
    },
    airtimeText: {},
    textInputContainer: {
        marginHorizontal: wp(3)
    }
})