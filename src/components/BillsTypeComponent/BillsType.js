import { View, Image, Text } from "react-native"
import { styles } from "./styles"


export const BillsType = ({ billImage, billName }) => {

    return (
        <View style={styles.bill_type_container}>
            <Image source={billImage} style={styles.bill_type_icon} />
            <Text style={styles.bill_type_text}>{billName}</Text>
        </View>
    )
}