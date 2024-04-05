import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";






export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white,
        paddingHorizontal: wp(3)
    },
    textContainer: {
        marginTop: hp(2),
        alignItems: "center",
        marginBottom: hp(2)
    },
    text: {
        fontSize: hp(1.9),
        fontWeight: "500",
        
    },
    textInputContainer: {
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(3),
        height: hp(6),
        borderRadius: 4,
        borderColor: Color.gray,
        alignItems: "center"
    },
    label: {
        marginBottom: hp(1),
        fontSize: hp(2.4),
        fontWeight: "500"
    },
    input: {
        width: wp(80)
    },
    textInputMainContainer: {
        marginVertical: hp(1)
    },
   buttonContainer: {
    marginBottom: hp(3)
   }
})