import { StyleSheet } from "react-native";
import { widthPercentageToDP as  wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";





export const styles = StyleSheet.create({
    container: {
        marginVertical: hp(2)
    },
    title: {
        fontSize: hp(2.5),
        fontWeight: "500",
        marginBottom: hp(1.2),
        marginHorizontal: wp(3)
    },
    date: {
        borderWidth: 1,
        height: hp(7),
        borderColor: Color.gray,
        borderRadius: 4,
    },
    dateText: {
        paddingHorizontal: wp(4),
        marginTop: hp(3)
    }
})