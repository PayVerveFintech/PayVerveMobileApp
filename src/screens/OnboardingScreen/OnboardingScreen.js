
import { SafeAreaView, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./style"



export default function OnboardingScreen() {

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.root}>
            <View>
               <View style={styles.logoContainer}>
                {/* <Image
                    source={require("../../../assets/newLogo.png")}
                    resizeMode="contain"
                    style={styles.logo}
                /> */}
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