import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";






export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white,
        width: wp(100)
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: hp(3)
    },
    icon: {
        marginLeft: wp(3),
        marginRight: wp(25)
    },
    title: {
        fontSize: hp(2.8),
        fontWeight: "800"
    },
    image: {
        width: 100,
        height: 100
    },
    container: {
        // flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        marginVertical: hp(5)
    },
    contenContainer: {
        marginVertical: hp(3),
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: wp(3)
    },
    imageIcon: {
        width: 30,
        height: 30,
        marginHorizontal: wp(3)
    },
    text: {
        width: wp(80),
        fontSize: hp(2.4),
        lineHeight: hp(3.5)
    }
})