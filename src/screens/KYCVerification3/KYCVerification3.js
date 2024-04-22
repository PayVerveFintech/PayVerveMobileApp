import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';

const KYCVerification3 = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header_Text_1}>
                KYC Verification
            </Text>

           <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingTop: 30}}>
                <View style={{flexDirection: 'column'}}>
                    <Image 
                        source={require('../../../assets/checked_radio.png')}
                        style={styles.img_checking}
                    />
                    <Text>Personal Information</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                    <Image 
                        source={require('../../../assets/checked_radio.png')}
                        style={styles.img_checking}
                    />
                    <Text>Selfie</Text>
                </View>

                <View style={{flexDirection: 'column'}}>
                <Image 
                        source={require('../../../assets/checked_radio.png')}
                        style={styles.img_checking}
                    />
                    <Text>Confirmation</Text>
                </View>
            </View>

            <View style={{marginTop: "40%", marginBottom: "30%"}}>
                <Image 
                    source={require("../../../assets/like.png")}
                    style={{width: 150, height: 150, alignSelf: 'center', resizeMode: 'contain', }}
                />

                <Text style={
                    {
                        fontSize: 25,
                        paddingTop: 20,
                        paddingLeft: 40,
                        paddingRight: 40,
                        textAlign: 'center',
                        fontWeight: '900'
                    }
                }>
                    Verification will take a few minute, Kindly Login to have access to your account
                </Text>
            </View>

            <TouchableOpacity 
                style={styles.signupButton}
                onPress={() => navigation.navigate('VerificationCode')}
            >
                <Text style={styles.touchableOpacityText}>
                    Login
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default KYCVerification3;