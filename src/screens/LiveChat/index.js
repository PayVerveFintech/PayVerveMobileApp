import { View, Text, TextInput, Pressable } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { useState } from "react";
import Header from "../../components/HeaderComponent";

const LiveChat = () => {
    
    const [queryMessage, setQueryMessage] = useState([])
    const [showUserMessage, setShowUserMessage] = useState(false)
    const [userMessage, setUserMessage] = useState("")
    const [responseMessage, setResponseMessage] = useState([])
    const [showBotMessage, setShowBotMessage] = useState(false)
    const [botMessage, setBotMessage] =  useState("")

    const mergedMessages = queryMessage.map((message, index) => ({
        queryMessage: message,
        responseMessage: responseMessage[index] || '' // If no response exists for the message, default to an empty string
    }));


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Live Chat" />
            
            <View style={styles.chatInterface}>
                <View>
                    <View style={styles.botMessageContainer}>
                        <Text style={styles.botMessage}>
                            Good day, my name is Verve assist. Do know that your privacy, security, 
                            and data is secured while being used to providing a better service to you. 
                            How may I be of assistance.
                        </Text>
                    </View>

                    {/* {mergedMessages.map((mergedItem, index) => (
                        <View key={index}>
                            <ChatBox
                            style={{ backgroundColor: "#079393"}}
                            queryMessage={mergedItem.queryMessage}
                            alias={"ME"}
                            floatStyle={{float: "right", flexDirection: "row-reverse", width: "80%"}}
                            
                            />
                            {mergedItem.responseMessage && (
                                <ChatBox
                                style={{ backgroundColor: "#AEC0C0" }}
                                queryMessage={mergedItem.responseMessage}
                                alias={"AI"}
                                floatStyle={{float: "left", width: "80%"}}
                               
                                />
                            )}
                        </View>

                    ))} */}
                </View>

                <View style={styles.inputWrapper}>
                    <Ionicons name="image-outline" size={24} color="black" />
                    <TextInput 
                        style={styles.textInput}
                    />
                    <Pressable
                    >
                        <Ionicons name="send-sharp" size={24} color="#2196F3" />
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LiveChat