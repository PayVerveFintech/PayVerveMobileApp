import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { styles } from '../styles/styles';
import SignUp from './SignUp';
import { Login } from './Login';

const OnboardingScreen = () => {
    return (
        <View style={styles.container}>

            {/* Logo */}
            <Image 
                source={require('../../assets/logo.jpg')}
                style={styles.logo}
            />

            {/* Background Image */}
            <ImageBackground 
                source={require('../../assets/onboarding_screen_phone.png')} 
                style={styles.onboarding_bg_img} 
            />
            
            {/* Welcome Text */}
            <Text
                style={styles.onboarding_body_txt}
            >
                The Safest and Easiest Method For Online Banking
            </Text>

            {/* SignUp Button */}
            <TouchableOpacity 
                onPress={SignUp}
                style={styles.signUpButton}
            >
                <Text style={styles.buttonText}> SignUp </Text>
            </TouchableOpacity>

            {/* Login Button */}
            <TouchableOpacity
                onPress={Login}
                style={styles.loginButton}
            >
                <Text style={styles.buttonText}> Login</Text>
            </TouchableOpacity>

        </View>
    )
}

export default OnboardingScreen;