import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "../styles/styles";

const KYCVerification2 = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.header_Text_1}>
                KYC Verification
            </Text>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <View style={{flexDirection: 'column'}}>
                    <Text>Personal Information</Text>
                    <Text>Personal Information</Text>
                </View>

                <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                    <Text>Selfie</Text>
                    <Text>Selfie</Text>
                </View>

                <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                    <Text>Confirmation</Text>
                    <Text>Confirmation</Text>
                </View>
            </View>

            <Text style={styles.textInput}>
                Kindly face the camera and tilt your head left to the right and finally to the center.
            </Text>

            <TouchableOpacity style={styles.buttonText}>
                <Text> Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default KYCVerification2;