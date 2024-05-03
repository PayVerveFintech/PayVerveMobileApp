import { View, Text } from "react-native"
import { styles } from "./Styles"

export const Review = () => {

    return (
        <View style={styles.container}>
            <View style={styles.review_container_flex}>

                <View style={styles.review_description_left}>
                    <Text style={styles.review_desc_text}>Transfer from your Naira account</Text>
                </View>

                <View style={styles.review_description_right}>
                    <Text style={styles.review_debit_text}>Debit - 1000</Text>
                </View>
            </View>

            <View style={styles.review_container_flex}>
                <View style={styles.review_description_left}>
                    <Text style={styles.review_desc_text}>To +234123456789 - MTN Data</Text>
                </View>

                <View style={styles.review_description_right}>
                    <Text style={styles.review_text}>Credit - 1000</Text>
                    <Text style={styles.review_text_number}>+234123456789</Text>
                </View>
            </View>

            <View style={styles.review_container_flex}>
                <View style={styles.review_description_left}>
                    <Text style={styles.review_desc_text}>Commission</Text>
                </View>

                <View style={styles.review_description_right}>
                    <Text style={styles.review_text}>FREE</Text>
                </View>
            </View>

            <View style={styles.review_container_flex}>
                <View style={styles.review_description_left}>
                    <Text style={styles.review_desc_text}>Total debit</Text>
                </View>

                <View style={styles.review_description_right}>
                    <Text style={styles.review_text}>₦ 1,000</Text>
                </View>
            </View>
        </View>
    )
}