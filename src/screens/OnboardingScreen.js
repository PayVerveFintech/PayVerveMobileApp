import { View, Image, Text, StyleSheet } from 'react-native';

const OnboardingScreen = () => {
    return (
        <View>
            
            <Image source={require('../../assets/onboarding_screen_phone.png')} style={{width: '100%', height: '100%'}} />
            <Text>Welcome</Text>
        </View>
    )
}

export default OnboardingScreen;