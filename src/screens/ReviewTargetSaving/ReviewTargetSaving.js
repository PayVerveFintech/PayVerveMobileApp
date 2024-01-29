import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { TouchableOpacity } from "react-native";
import Styles from "../ReviewTargetSaving/styles";

const ReviewTargetSaving= () => {
    return(
        <View style={styles.container}>

            {/* header with navigation back button and header text */}
            <View style={Styles.header_view_style}>
                <TouchableOpacity
                    style={Styles.header_touch}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={require('../../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.header_Text_1}>
                    Review
                </Text>
            </View>

            {/* review body statement */}

            <View style={Styles.body_row}>
                <Text>Savings Name</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={Styles.body_row}>
                <Text>Amount</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={Styles.body_row}>
                <Text>Interest Yield</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={Styles.body_row}>
                <Text>Total Amount</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={Styles.body_row}>
                <Text>Frequency</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={Styles.body_row}>
                <Text>Start Date</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={Styles.body_row}>
                <Text>Savings Name</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={Styles.body_row}>
                <Text>End Date</Text>
                {/* <Text>{}</Text> */}
            </View>

            <Text>Note</Text>
            <Text>
                By proceeding you give your consent to the remover of 1,000 NGN from your acount weekly for 32 days.
                An Attraction fee of 5% will be deducted if you choose to withdraw your savings before maturity date.
            </Text>

            {/* Create button */}
            <TouchableOpacity
                style={Styles.signupButton}
            >
                <Text style={styles.header_Text_1}>Create</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ReviewTargetSaving;