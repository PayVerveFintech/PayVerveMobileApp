import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";





export const styles = StyleSheet.create({
    textInputMainContainer: {
        // marginTop: hp(0)
    },
    input: {
        borderWidth: 1,
        width: wp(94),
        height: hp(6),
        borderRadius: 5,
        borderColor: Color.gray,
        paddingHorizontal: wp(5),
        marginVertical: hp(0.5)
    },
    label: {
        fontSize: hp(2.4),
        fontWeight: "500",
        marginBottom: hp(1)
    }
})