import { View, Text, Image } from 'react-native';
import { styles } from '../../styles/styles'

const Password = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    style={styles.backVector}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={require('../../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.header_Text_1}> Password </Text>
            </View>

            <View>
                <View>
                    <Image 
                        source={require('../../../assets/passwordIcon.png')}
                    />
                    <Text>Change Password</Text>
                </View>

                <View>
                    <Image 
                        source={require('../../../assets/changeTansactionPin.png')}
                    />
                    <Text>Change Transaction Pin</Text>
                </View>

                <View
                    // onPress={}
                >
                    <Image 
                        source={require('../../../assets/fingerprintIcon.png')}
                    />
                    <Text>Enabe Fingerprint</Text>
                </View>
            </View>
        </View>
    )
}

export default Password;