import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";





export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white,
        paddingHorizontal: wp(3)
    },
    textContainer: {
        marginTop: hp(5),
        alignItems: "center",
        justifyContent: "center",
        marginBottom: hp(5)
    },
    text: {
        fontSize: hp(2),
        fontWeight: "500",
    },
    textInputContainer: {
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(3),
        height: hp(7),
        borderRadius: 4,
        borderColor: Color.gray,
        alignItems: "center"
    },
    label: {
        marginBottom: hp(1),
        fontSize: hp(2.4),
        fontWeight: "500"
    },
    input: {
        width: wp(80)
    },
    textInputMainContainer: {
        marginVertical: hp(1)
    },
    btnContainer: {
        backgroundColor: Color.btnColor,
        height: hp(6.5),
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: wp(20),
        borderRadius: 8,
        marginTop: hp(10),
        marginBottom: hp(3)
    },
    btnText: {
        color: Color.white,
        fontWeight: "600"
    }
})