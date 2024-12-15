import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";




export const styles = StyleSheet.create({
    btn_wrapper: {
        alignItems: "center",
        marginTop: 20,
    },

    btn: {
        width: wp(90),
        height: hp(6.5),
        paddingHorizontal: 12,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },

    active: {
        backgroundColor: "#2196F3"
    },

    inactive: {
        backgroundColor: "#949191"
    },

    btn_text: {
        color: "#fff",
        fontSize: 12
    },

    back_btn: {
        position: "absolute",
        left: -5,

    },
})