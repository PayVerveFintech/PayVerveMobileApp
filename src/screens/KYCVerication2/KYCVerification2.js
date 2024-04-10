import React from 'react' 
import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../../styles/styles";

const KYCVerification2 = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.header_Text_1}>
                KYC Verification
            </Text>
            <View style={{flexDirection: 'row',  justifyContent: 'space-around', paddingTop: 30}}>
                <View style={{flexDirection: 'column'}}>
                    <Image 
                        source={require('../../../assets/checked_radio.png')}
                        style={styles.img_checking}
                    />                    <Text>Personal Information</Text>
                </View>

                <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                    <Image 
                        source={require('../../../assets/checked_radio.png')}
                        style={styles.img_checking}
                    />
                    <Text>Selfie</Text>
                </View>

                <View style={{flexDirection: 'column', alignSelf: 'center'}}>
                    <Image 
                        source={require('../../../assets/unchecked_radio.png')}
                        style={styles.img_checking}
                    />
                    <Text>Confirmation</Text>
                </View>
            </View>

            <Text style={styles.signupTexts}>
                Kindly face the camera and tilt your head left to the right and finally to the center.
            </Text>

            <TouchableOpacity style={styles.signupButton} onPress={ () => navigation.navigate('KYCVerify3')}>
                <Text style={styles.touchableOpacityText}> Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default KYCVerification2;