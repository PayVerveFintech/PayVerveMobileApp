import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        backgroundColor: 'white',
        marginTop: 15
    },

    headerTouchableOpacity: {
        paddingTop: 60,
        paddingLeft: 5
    },

    scrollViewStyles: {
        elevation: 20
    },

    scrollViewStyles_row: {
        flexDirection: 'row'
    },

    scrollViewStyles_col: {
        flexDirection: 'column'
    },

    scrollViewStyles_img: {
        justifyContent: 'flex-end', 
        marginBottom: 15
    }
});

export default Styles;