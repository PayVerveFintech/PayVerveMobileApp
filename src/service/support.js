import { Image, Linking } from "react-native";

import feedback from "../../assets/Feedback.png"
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import xTwitter from "../../assets/TwitterX.png"

export const Support = (navigation) => {

    //navigate to feedback
    const openFeedback = () => {
        navigation.navigate("Feedback")
    }
    
    //open Live chat
    const openLiveChat = () => {
        navigation.navigate("Live Chat")
    }
    
    //open phone app
    const openPhoneApp = () => {
        Linking.openURL("tel:+2348171122814")
    }
    
    //open email from app
    const openEmail = () => {
        Linking.openURL("mailto:support@payverve.com")
    }
    
    return [
        {
            title: "Send Feedback",
            image: <Image source={feedback} />,
            onPress: openFeedback,
        },
    
        {
            title: "Live Chat",
            image: <Ionicons name="chatbubbles-outline" size={24} color="black" />,
            onPress: openLiveChat,
        },
    
        {
            title: "+2348171122814",
            image: <Feather name="phone" size={24} color="black" />,
            onPress: openPhoneApp,
        },
    
        {
            title: "Support@payverve.com",
            image: <Fontisto name="email" size={24} color="black" />,
            onPress: openEmail,
        },
    
        {
            title: "Twitter",
            image: <Image source={xTwitter} />,
            // onPress: ,
        },
    
        {
            title: "LinkedIn",
            image: <Fontisto name="linkedin" size={24} color="black" />,
            // onPress: ,
        },
    
        {
            title: "Instagram",
            image: <Feather name="instagram" size={24} color="black" />,
            // onPress: ,
        },
    ]
}
