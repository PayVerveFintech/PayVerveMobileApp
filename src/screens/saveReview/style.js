import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as  hp } from "react-native-responsive-screen";
import { Color } from "../../color/Color";



export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: Color.white
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
        fontWeight: "700"
    },
    contentContainer: {
        marginTop: hp(5),
        marginHorizontal: wp(3)
    },
    content: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: hp(2)
    },
    noteContainer: {
        marginTop: hp(10),
        marginHorizontal: wp(2)
    },
    noteTitle: {
        fontSize: hp(3),
        fontWeight: "700",
        marginBottom: hp(2)
    },
    noteText: {
        fontSize: hp(2.4),
        color: Color.gray
    },
    contentTitle: {
        fontSize: hp(2.6),
        fontWeight: "600"
    },
    contentText: {
        fontWeight: "500"
    },
    buttonContainer: {
        marginTop: hp(5)
    }
})