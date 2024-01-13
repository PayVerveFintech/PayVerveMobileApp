import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white,
        paddingHorizontal: wp(3)
    },
    header:{
        flexDirection: "row",
        alignItems: "center",
        paddingTop: hp(3)
    },
    iconContainer: {
        paddingLeft: wp(3),
        marginRight: wp(28)
    },
    title: {
        fontSize: hp(4),
        fontWeight: "600"
    },
    saveContainer: {
        flexDirection: "row",
        height: hp(18),
        backgroundColor: "#f5f5f5",
        marginVertical: hp(1),
        width: wp(94),
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center"
    },
    saveTitle: {
        fontSize: hp(2.7),
        fontWeight: "700",
        marginBottom: hp(1)
    },
    saveDesc: {
        fontSize: hp(2.4),
        fontWeight: "500",
        lineHeight: 24,
        paddingRight: wp(2)
    },
   image: {
    width: 30,
    height: 30,
    marginHorizontal:hp(3)
   },
   contentContainer: {
    width: wp(80),
   },
   flatlistContainer: {
    marginTop: hp(10)
   }
})