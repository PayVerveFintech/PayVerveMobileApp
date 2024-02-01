import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    backVector: {                        
        paddingTop: 60,
        paddingLeft: 5
    },

    body: {
        display: flex,
        padding: 12,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
        alignSelf: "stretch",
    },

    headerText: {
        fontSize: 35,
        paddingTop: 50,
        paddingLeft: 35,
        alignSelf: 'center',
        fontWeight: 'bold'
    },

    transferHistory: {
        backgroundColor: "#F9F9F9",
        borderRadius: 8,
    }
})

export default styles;