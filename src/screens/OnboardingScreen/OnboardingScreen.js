// import { View, Image, Text, TouchableOpacity, ImageBackground } from 'react-native'
// import { styles } from './style';
// // import { styles } from '../../styles/styles';

// import { useNavigation } from '@react-navigation/native';

// const OnboardingScreen = () => {
//     // initialize navigation from useNavigation hook
//     const navigation = useNavigation();

//     return (
//         <View style={styles.container}>

//             {/* Logo */}
//             <Image 
//                 source={require('../../../assets/logo.jpg')}
//                 style={styles.logo}
//             />

//             <View style={styles.bg_circle}>
                
//                 <ImageBackground 
//                     source={require('../../../assets/onboarding_image.png')} 
//                     style={styles.onboarding_bg_img} 
//                 />
//             </View>

//             <View style={{backgroundColor: 'white', height: "100%"}}>
//                 {/* Welcome Text */}
//                 <Text
//                     style={styles.onboarding_body_txt}
//                 >
//                     The Safest and Easiest Method For Online Banking.
//                 </Text>

//                 <View style={{flexDirection: 'row', marginTop: 20, marginHorizontal: 5, alignSelf: 'center'}}>
//                         {/* SignUp Button */}
//                     <TouchableOpacity 
//                         // added navigation function
//                         onPress={() => navigation.navigate("SignUp")}
//                         // changed style from signupButton to onboardingSignUpButton
//                         style={styles.onboardingSignUpButton}
//                     >
//                         <Text style={
//                             {
//                                 color: 'white', 
//                                 fontWeight: 'bold', 
//                                 fontSize: 25, 
//                                 alignSelf: 'center',
//                                 padding: 10
//                             }
//                         }> SignUp </Text>
//                     </TouchableOpacity>

//                     {/* Login Button */}
//                     <TouchableOpacity
//                         // added navigation function
//                         onPress={()=>navigation.navigate("Login")}
//                         style={styles.loginButton}
//                     >
//                         <Text style={
//                             {
//                                 fontWeight: 'bold', 
//                                 fontSize: 25, 
//                                 alignSelf: 'center',
//                                 padding: 10
//                             }
//                         }> Login</Text>
//                     </TouchableOpacity>
//                     </View>

//             </View>
//         </View>
//     )
// }

// export default OnboardingScreen;






import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style"



export default function OnboardingScreen() {

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.root}>
            <View>
               <View style={styles.logoContainer}>
                <Image
                    source={require("../../../assets/newLogo.png")}
                    resizeMode="contain"
                    style={styles.logo}
                />
               </View>
               <View style={styles.heroBg}>
                <Image
                    source={require("../../../assets/onboardingImage.png")}
                    resizeMode="contain"
                    style={styles.heroImage}
                />
               </View>
               <View style={styles.textContainer}>
                <Text style={styles.text} >The Safest and {"\n"} Easiest Method {"\n"} For Online {"\n"} Banking.</Text>
               </View>
               <View style={styles.btnMainContainer}>
                <View>
                    <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("SignUp")}>
                        <Text style={styles.btnText}>SignUp</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnContainer2} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.btnText2}>Login</Text>
                    </TouchableOpacity>
                </View>
               </View>
            </View>
        </SafeAreaView>
    )
}