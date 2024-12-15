import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";



export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white
    },
    // logo: {
    //     width: wp(40),
    //     height: hp(20),
    //     marginTop: -hp(1)
    // },
    logoContainer: {
        paddingHorizontal: wp(30)
    },
    heroBg: {
        backgroundColor: 'linear-gradient(180deg, rgba(33, 150, 243, 0.80) -151.46%, rgba(255, 255, 255, 0.40) 77.19%)',
        borderRadius: 180,
        paddingTop: hp(5),
        height: hp(34),
        marginHorizontal: wp(18),
        alignItems: "center",
        marginTop: hp(8)

    },
    heroImage: {
        width: wp(55),
        height: hp(35),
    },
    text: {
        fontSize: hp(6),
        fontWeight: "700",
        lineHeight: hp(9)
    },
    textContainer: {
        marginHorizontal: wp(3),
        marginVertical: hp(3)
    },
    btnMainContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: wp(3),
        marginTop: hp(1)
    },
    btnContainer: {
        backgroundColor: 'linear-gradient(180deg, rgba(33, 150, 243, 0.80) -151.46%, rgba(255, 255, 255, 0.40) 77.19%)',
        width: wp(38),
        height: hp(6.5),
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    btnContainer2: {
        width: wp(38),
        height: hp(6.5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'linear-gradient(180deg, rgba(33, 150, 243, 0.80) -151.46%, rgba(255, 255, 255, 0.40) 77.19%)',
    },
    btnText: {
        fontSize: hp(2.5),
        fontWeight: "500",
        color: Color.white
    },
    btnText2: {
        fontSize: hp(2.5),
        fontWeight: "500",
        color: Color.black
    }
})
