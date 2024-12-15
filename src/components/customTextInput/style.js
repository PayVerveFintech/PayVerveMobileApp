import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";





export const styles = StyleSheet.create({
    inputContainer: {
       marginVertical: hp(1)
    },
    input: {
        borderWidth: 1,
        height: hp(6.5),
        borderRadius: 10,
        borderColor: Color.gray,
        paddingLeft: wp(5)
    },
    title: {
        fontSize: 16,
        fontWeight: "500",
        marginBottom: hp(1)
    },

})