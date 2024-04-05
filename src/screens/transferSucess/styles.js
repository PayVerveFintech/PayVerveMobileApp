import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


import { Color } from "../../color/Color";




export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white,
        justifyContent: "center",
        alignItems: "center"
    },
    popUp: {
        alignItems: "center",
        marginBottom: hp(7)
    },
    text: {
        fontSize: hp(3),
        fontWeight: "bold"
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: Color.gray,
       width: wp(70),
       height: hp(6),
       paddingHorizontal: wp(3),
       borderRadius: 15,
       marginVertical: hp(1.5)
    },
    text2: {
        fontSize:  hp(2.6),
        color: Color.white
    },
    icon: {
        marginRight: wp(4)
    }
})