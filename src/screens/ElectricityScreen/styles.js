import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        backgroundColor: "#FFF"
    },

    select_meter_wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: 24,
    },

    select_meter_btn: {
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        width: 159,
        height: 45,
        alignItems: "center",
        justifyContent: "center"

    },

    selectedMeter: {
        backgroundColor: "#2196F3",
    },

    select_meter_text: {
        fontSize: 18,
        fontWeight: "700"
    },

    meterScreen: {
        gap: 23,
    },

    meterTypeWrapper: {
        gap: 8,
    },

    meterTypeLabel: {
        fontSize: 16,
    },
 
})