import { Text, View } from "react-native"
import { styles } from "../styles/styles"
import { TouchableOpacity } from "react-native";

const ReviewTargetSaving= () => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{
                        paddingTop: 60,
                        paddingLeft: 5
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={require('../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.header_Text_1}>
                    Review
                </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
                <Text>Savings Name</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>Amount</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>Interest Yield</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>Total Amount</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>Frequency</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>Start Date</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>Savings Name</Text>
                {/* <Text>Rent</Text> */}
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text>End Date</Text>
                {/* <Text>{}</Text> */}
            </View>

            <Text>Note</Text>
            <Text>
                By proceeding you give your consent to the remover of 1,000 NGN from your acount weekly for 32 days.
                An Attraction fee of 5% will be deducted if you choose to withdraw your savings before maturity date.
            </Text>

            <TouchableOpacity
                style={styles.signupButton}
            >
                <Text style={styles.header_Text_1}>Create</Text>
            </TouchableOpacity>
        </View>
    )
}
export default ReviewTargetSaving;