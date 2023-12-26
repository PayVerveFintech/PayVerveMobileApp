import { View, Text, Pressable, Image } from "react-native"
// import Clipboard from "@react-native-clipboard/clipboard";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./Styles";
import { useState, useEffect } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import copyImg from '../../../assets/copyImage.png'

export const AccountsComponent = ({ account, accountNum }) => {
    const [copiedValue, setCopiedValue] = useState("")
    const [copy, setCopy] = useState(accountNum)
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        setCopiedValue(copy)
        // Clipboard.setString(copy);
        setCopied(true)
    }

    useEffect(() => {
      if (copied === true) {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 2000)
      

            return () => clearTimeout(timer)
        }
    
    }, [copied])
    
    // console.log(copiedValue)


    return (
        <View style={styles.account_type_wrapper}>

            <Text style={styles.account_type_text}>{account} Account Number</Text>
            <View style={styles.account_number_flex} >
                <Text style={styles.account_number}>{accountNum}</Text>
                <Pressable 
                    style={styles.copy_account_number}
                    onPress={handleCopy}
                    
                >
                    {
                        copied
                            ? <MaterialCommunityIcons name="clipboard-check-multiple-outline" size={24} color="green" />
                            // : <Ionicons name="copy-outline" size={24} color="black" />
                            : <Image source={copyImg} style={styles.copy_btn} />
                    }
                </Pressable>
            </View>

        </View>
    )
}