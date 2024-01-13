import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";




export const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: hp(2)
    },
    trustContainer: {
        // justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    trust: {
        fontSize: hp(3),
        fontWeight: "900"
    },
    trustTextContainer: {
        width: wp(80),
        marginTop: hp(2)
    },
    trustText: {
        fontSize: hp(2.5),
        fontWeight: "500"
    },
    trustIcon: {
        marginRight: wp(4)
    }
})