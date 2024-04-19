import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";



export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: hp(3)
    },
    icon: {
        marginLeft: wp(3),
        marginRight: wp(25)
    },
    title: {
        fontSize: hp(2.8),
        fontWeight: "700"
    },
    titleContainer: {
        width: wp(94),
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: wp(3),
        marginTop: hp(5)
    },
    titleText: {
        fontSize: hp(2.5),
        lineHeight: hp(4)
    },
    input: {
        marginTop: hp(5),
        marginHorizontal: wp(3)
    },
    buttonContainer: {
        marginBottom: hp(3)
    }
})