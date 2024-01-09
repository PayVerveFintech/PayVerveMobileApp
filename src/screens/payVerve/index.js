import { View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { AntDesign } from "@expo/vector-icons";
import { styles } from './style'
import { Color } from '../../color/Color';
import { Selector } from '../../components/selector';
import { useNavigation } from '@react-navigation/native';





export default function PayVerve() {

  const navigation = useNavigation();

    const walletType = ["Naira wallet", "Dollar wallet", "Pound wallet"];
    const [wallet, setWallet] = useState(walletType[0]);

    const [accountNumber, setAccountNumber] = useState("");
    const [amount, setAmount] = useState("");
    const [narration, setNarration] = useState("");


  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Kindly note that user’s can only send Naira to Naira, Dollars to</Text>
        <Text style={styles.text}>Dollars, Pounds to Pounds</Text>
      </View>
      <View>
        <KeyboardAvoidingView behavior='padding'>
            <View style={styles.textInputMainContainer}>
                <Text style={styles.label}>Wallet</Text>
               <Selector data={walletType} setFunc={setWallet} placeholder={"Select your PayVerve wallet"}/>
            </View>
            <View style={styles.textInputMainContainer}>
                <Text style={styles.label}>Account Number</Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        placeholder='0123456789'
                        style={styles.input}
                        value={accountNumber}
                        onChangeText={(text) => setAccountNumber(text)}
                        keyboardType='number-pad'
                    />
                </View>
            </View>
            <View style={styles.textInputMainContainer}>
                <Text style={styles.label}>Amount</Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        placeholder='2000'
                        style={styles.input}
                        value={amount}
                        onChangeText={(text) => setAmount(text)}
                        keyboardType='number-pad'
                    />
                </View>
            </View>
            <View style={styles.textInputMainContainer}>
                <Text style={styles.label}>Narration</Text>
                <View style={styles.textInputContainer}>
                    <TextInput 
                        placeholder='Have fun'
                        style={styles.input}
                        value={narration}
                        onChangeText={(text) => setNarration(text)}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
      </View>
      <TouchableOpacity style={styles.btnContainer} onPress={() => navigation.navigate("Review", {accountNumber, amount,narration, wallet})}  >
        <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>
    </View>
  )
}