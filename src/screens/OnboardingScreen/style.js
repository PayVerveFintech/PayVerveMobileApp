// import { StyleSheet } from "react-native";

// export const styles = StyleSheet.create({
//     container: {
//         padding: 10,
//         paddingTop: 250,
//         flex: 1,
//         backgroundColor: 'white',
//         justifyContent: "center",
//         marginTop: 15,
//     },

//     bg_circle: {
//         alignItems: 'center',
//         marginTop: 20,
//         marginLeft: 30,
//         marginRight: 50,
//         width: 300,
//         height: 300,
//         borderRadius: 170,
//         backgroundColor: 'linear-gradient(180deg, rgba(33, 150, 243, 0.80) -151.46%, rgba(255, 255, 255, 0.40) 77.19%)',
//     },

//     logo: {
//         height: 150,
//         width: 150,
//         resizeMode: 'contain',
//         alignSelf: 'center',
//         marginTop: 10
//     },

//     onboarding_bg_img: {
//         marginTop: 90,
//         paddingTop: 50,
//         height: 500,
//         width: 250,
//         resizeMode: 'cover'
//     },

//     // onboarding_body_txt: {
//     //     fontSize: 50,
//     //     fontWeight: 'bold',
//     //     paddingRight: 70,
//     //     paddingTop: 50
//     // },

//     onboardingSignUpButton: {
//         backgroundColor: '#2196F3',
//         width: 161,
//         height: 50,
//         elevation: 10,
//         borderRadius: 8,
//         marginRight: 10
//     },

//     loginButton: {
//         height: 50,
//         width: 160,
//         left: 10,
//         borderColor: '#2196F3',
//         borderRadius: 8,
//         borderWidth: 1
//     },
// });



import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";



export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white
    },
    logo: {
        width: wp(40),
        height: hp(20),
        marginTop: -hp(1)
    },
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
        marginTop: hp(-2.5)

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
        marginTop: hp(2)
    },
    btnContainer: {
        backgroundColor: 'linear-gradient(180deg, rgba(33, 150, 243, 0.80) -151.46%, rgba(255, 255, 255, 0.40) 77.19%)',
        paddingHorizontal: wp(15),
        paddingVertical: hp(2.5),
        borderRadius: 10
    },
    btnContainer2: {
        paddingHorizontal: wp(15),
        paddingVertical: hp(2.5),
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