import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native";
import Styles from "./style";

const TargetSuccessful = ({navigation}) => {
    return(
        <View style={Styles.container}>

            {/* header image */}
            <Image 
                source={require('../../assets/successful_icon.png')}
                style={Styles.imageHeader}
            />

            {/* congratulatory welcome message */}
            <Text>
                Congratulations you've successfully created your Rent target savings.
            </Text>
            
            {/* back navigation button */}
            <TouchableOpacity
                style={Styles.signupButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={Styles.touchableOpacityText}>Back Home</Text>
            </TouchableOpacity>
        </View>
    )
}
export default TargetSuccessful;