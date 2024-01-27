import { View, Text, Image } from "react-native";
import success from "../../../assets/success.png"
import blank from "../../../assets/emptyFrame.png"
import { styles } from "./styles"

export const PersonalInfoProgress = ({ screen }) => {

    return(
        <View style={styles.personalInfoProgress}>
            <View style={styles.personalInfoProgressItem}>
                <Image source={screen === "personal" ? success : blank} />
                <Text style={{fontSize: 10}}>Personal Information</Text>
            </View>

            <View style={styles.personalInfoProgressItem}>
                <Image source={screen === "proof" ? success : blank} />
                <Text style={{fontSize: 10}}>Proof Of Address</Text>
            </View>

            <View style={styles.personalInfoProgressItem}>
                <Image source={screen === "confirm" ? success : blank} />
                <Text style={{fontSize: 10}}>Confirmation</Text>
            </View>
            
        </View>
    )
}