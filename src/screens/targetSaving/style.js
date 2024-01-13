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
        fontSize: hp(2.8),
        fontWeight: "700"
    },
    textContainer: {
        marginTop: hp(6),
        marginHorizontal: wp(3)
    },
    text: {
        fontSize: hp(2.5),
        fontWeight: "500"
    },
    inputContainer: {
        marginTop: hp(5),
        marginHorizontal: wp(3)
    },
    buttonContainer: {
        marginBottom: hp(2)
    }
})