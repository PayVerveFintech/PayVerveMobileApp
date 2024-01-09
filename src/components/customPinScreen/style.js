import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";






export const styles = StyleSheet.create({
    root: {
        backgroundColor: Color.white,
        flex: 1,
        paddingTop: hp(10)
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp(3)
    },
    icon: {
        marginRight: wp(20)
    },
    title: {
        fontSize: hp(2.8),
        fontWeight: "700"
    },
    textInputContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: hp(15)
    },
    input: {
        borderBottomWidth: 1,
        borderColor: Color.gray,
        width: wp(10),
        fontSize: hp(3),
        paddingLeft: wp(3)
    },
    flatListContainer: {
        height: hp(40),
        marginTop: hp(15),
    },
    keyContainer: {
        marginHorizontal: wp(12),
        marginVertical: hp(4),
        borderBottomWidth: 1,
        width: wp(9),
        alignItems: "center",
    },
    key: {
        fontSize: hp(2.5),
        fontWeight: "600"
    }
})