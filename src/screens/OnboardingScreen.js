import { View, Image, Text, StyleSheet } from 'react-native';

const OnboardingScreen = () => {
    return (
        <View style={styles.container}>
            
            <Image source={require('../../assets/onboarding_screen_phone.png')} style={{width: '100%', height: '70%'}} />
            <Text>Welcome</Text>
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