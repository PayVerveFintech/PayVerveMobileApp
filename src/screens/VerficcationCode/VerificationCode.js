import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from '../../styles/styles';

const VerificationCode = ({verifyCode, navigation}) => {
    return (
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
                        source={require('../../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={
                    {
                        fontSize: 35,
                        paddingTop: 50,
                        paddingLeft: 50,
                        alignSelf: 'center',
                        fontWeight: 'bold'
                    }
                }> 
                    Verification Code
                </Text>

            </View>

            <Text style={styles.header_Text_2}>
                A verification code as been sent to the email below
            </Text>
            <Text>{}</Text>

            <Text style={{marginTop: '25%'}}>
                Verification Code
            </Text>

            <TextInput 
                value=''
                placeholder='123456'
                onChangeText={verifyCode}
                style={styles.textInput}
            />

            <TouchableOpacity 
                style={styles.signupButton}
                onPress={() => navigation.navigate('CreateNewPW')}
            >
                
                <Text style={styles.touchableOpacityText}> Next </Text>
            </TouchableOpacity>

        </View>
    )
}

export default VerificationCode;