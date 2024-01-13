import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";





export const styles = StyleSheet.create({
    inputContainer: {
       marginVertical: hp(2)
    },
    input: {
        borderWidth: 1,
        height: hp(7),
        borderRadius: 4,
        borderColor: Color.gray,
        paddingLeft: wp(5)
    },
    title: {
        fontSize: hp(2.5),
        fontWeight: "500",
        marginBottom: hp(1.2)
    },

})