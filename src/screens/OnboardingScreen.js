import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';
import SignUp from './SignUp';
import { Login } from './Login';
import LinearGradient from 'react-native-linear-gradient';

const OnboardingScreen = () => {
    return (
        <View style={styles.container}>

            {/* Logo */}
            <Image 
                source={require('../../assets/logo.jpg')}
                style={styles.logo}
            />

            <View style={styles.bg_circle}>
                {/* Background Image */}
                <ImageBackground 
                    source={require('../../assets/onboarding_image.png')} 
                    style={styles.onboarding_bg_img} 
                />
            </View>

            <View style={{backgroundColor: 'white', height: "100%"}}>
                {/* Welcome Text */}
                <Text
                    style={styles.onboarding_body_txt}
                >
                    The Safest and Easiest Method For Online Banking.
                </Text>

                <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 5, alignSelf: 'center'}}>
                        {/* SignUp Button */}
                    <TouchableOpacity 
                        onPress={SignUp}
                        style={styles.signUpButton}
                    >
                        <Text style={
                            {
                                color: 'white', 
                                fontWeight: 'bold', 
                                fontSize: 25, 
                                alignSelf: 'center',
                                padding: 10
                            }
                        }> SignUp </Text>
                    </TouchableOpacity>

                    {/* Login Button */}
                    <TouchableOpacity
                        onPress={Login}
                        style={styles.loginButton}
                    >
                        <Text style={
                            {
                                fontWeight: 'bold', 
                                fontSize: 25, 
                                alignSelf: 'center',
                                padding: 10
                            }
                        }> Login</Text>
                    </TouchableOpacity>
                    </View>

            </View>
        </View>
    )
}

export default OnboardingScreen;