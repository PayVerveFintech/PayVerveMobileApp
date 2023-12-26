import { TextInput, TouchableOpacity } from "react-native";
import { styles } from "../styles/styles";

const CreateNewPW = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_Text_1}>
                Create New Password
            </Text>

            <Text style={styles.header_Text_2}>
                When creating a new pasword kindly use words/sentences that can be easily remembered by you.
            </Text>

            <Text>
                New Password
            </Text>
            <TextInput 
                value=""
                onChangeText={(text) => console.log(text)}
                secureTextEntry={true}
                placeholder="Enter your password"
                style={styles.textInput}
            />

            <Text> 
                Confirm New Password
            </Text>
            <TextInput 
                value=""
                // onSubmitEditing={()=> navigation.navigate('SignUp')} // Go to Sign Up page after confirmation
                placeholder="Confirm your password"
                secureTextEntry
                style={styles.textInput}
            />

            <TouchableOpacity 
                style={styles.signupButton}
            >
                <Text style={styles.touchableOpacityText}> Reset </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CreateNewPW;