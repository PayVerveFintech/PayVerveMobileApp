import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white,
        // paddingHorizontal: wp(3)
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: hp(5)
    },
    iconContainer: {
        marginRight: wp(37)
    },
    title: {
        fontSize: 20,
        fontWeight: "600"
    },
    saveContainer: {
        flexDirection: "row",
        height: hp(15),
        backgroundColor: "#f5f5f5",
        marginVertical: hp(2),
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    saveTitle: {
        fontSize: 18,
        fontWeight: "700",
        marginBottom: hp(1)
    },
    saveDesc: {
        fontSize: 17,
        fontWeight: "400",
        lineHeight: 22,
        paddingRight: wp(2)
    },
   image: {
    width: 25,
    height: 25,
    marginHorizontal:hp(3)
   },
   contentContainer: {
    width: wp(80),
   },
   flatlistContainer: {
    marginTop: hp(10)
   }
})