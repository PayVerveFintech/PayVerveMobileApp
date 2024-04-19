import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";



export const styles = StyleSheet.create({
    input:{
        borderWidth:1,
        width: wp(94),
        borderRadius: 4,
        backgroundColor: Color.white,
        borderColor: Color.gray,
        height: hp(7),
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: wp(5),
        justifyContent: "space-between"
    },
    dropdownItemTxtStyle: {
        fontSize: hp(2.2),
        color: Color.gray
    },
    dropdownItemStyle: {
        marginVertical: hp(1),
        paddingHorizontal: wp(5)
    }
})