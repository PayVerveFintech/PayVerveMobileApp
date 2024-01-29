import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../../styles/styles';
<<<<<<< HEAD:src/screens/OnboardingScreen.js
=======
// import SignUp1 from '../SignUp/SignUp1';
// import Login from '../Login/Login';
// import { useNavigation } from '@react-navigation/native';
>>>>>>> blessing_development:src/screens/OnboardingScreen/OnboardingScreen.js

const OnboardingScreen = ({navigation}) => {

    // handling sign up navigation
    const handleSignUp = () => {
        navigation.navigate('SignUp1'); 
    };

    // handling sing in navigation
    const handleLogin = () => {
        navigation.navigate('Login'); 
    };

    return (
        <View style={styles.container}>

            {/* Logo */}
            <Image 
                source={require('../../../assets/logo.jpg')}
                style={styles.logo}
            />

            <View style={styles.bg_circle}>
                {/* Background Image */}
                <ImageBackground 
                    source={require('../../../assets/onboarding_image.png')} 
                    style={styles.onboarding_bg_img} 
                />
            </View>

            <View style={{backgroundColor: 'white', height: "100%", width: '100%'}}>
                {/* Welcome Text */}
                <Text
                    style={styles.onboarding_body_txt}
                >
                    The Safest and Easiest Method For Online Banking.
                </Text>

                <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 5, alignSelf: 'center'}}>
                        {/* SignUp Button */}
                    <TouchableOpacity 
                        onPress={handleSignUp}
                        style={styles.onboardingSignUpButton}
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
                        onPress={handleLogin}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
})

export default OnboardingScreen;