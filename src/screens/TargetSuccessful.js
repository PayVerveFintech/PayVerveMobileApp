import { Image, Text, View } from "react-native";
import { styles } from "../styles/styles";
import { TouchableOpacity } from "react-native";

const TargetSuccessful = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Image 
                source={require('../../assets/successful_icon.png')}
                style={{
                    alignSelf: 'center',
                    marginTop: 45
                }}
            />
            <Text>
                Congratulations you've successfully created your Rent target savings.
            </Text>
            <TouchableOpacity
                style={styles.signupButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.touchableOpacityText}>Back Home</Text>
            </TouchableOpacity>
        </View>
    )
}
export default TargetSuccessful;