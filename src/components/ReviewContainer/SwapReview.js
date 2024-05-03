import { View, Text } from "react-native"
import { styles } from "./Styles"

const SwapReview = () => {
  return (
    <View style={styles.container}>
        <View style={styles.review_container_flex}>
            <Text style={styles.review_desc_text}>Swap From</Text>
            <Text style={styles.reviewDetails}>{"Dollars Wallet"}</Text>
        </View>

        <View style={styles.review_container_flex}>
            <Text style={styles.review_desc_text}>Amount</Text>
            <Text style={styles.reviewDetails}>{"$2000"}</Text>
        </View>

        <View style={styles.review_container_flex}>
            <Text style={styles.review_desc_text}>Swap To</Text>
            <Text style={styles.reviewDetails}>{"Naira"}</Text>

        </View>

        <View style={styles.review_container_flex} >
            <Text style={styles.review_desc_text}>Amount</Text>
            <Text style={styles.reviewDetails}>{"₦1,560,000"}</Text>
        </View>

        <View style={styles.review_container_flex}>
            <Text style={styles.review_desc_text}>Exchange Fee</Text>
            <Text style={styles.reviewDetails}>{"₦1560"}</Text>
        </View>

        <View style={styles.review_container_flex}>
            <Text style={styles.review_desc_text}>Total</Text>
            <Text style={styles.reviewDetails}>{"₦1,561,560"}</Text>
        </View>
    </View>
  )
}

export default SwapReview