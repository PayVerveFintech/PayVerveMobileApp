import { View, Text, TextInput, TouchableOpacity, ScrollView, } from 'react-native'
import React, {useState} from 'react';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


import { styles } from './style';
import { Color } from '../../color/Color';
import { Selector } from '../../components/selector';
import TransferInput from '../../components/transferInput';





export default function OtherBanks() {

  const navigation = useNavigation();

  const walletType = ["Naira wallet", "Dollar wallet", "Pound wallet"];
  const transferType = ["Local", "Foreign"];

  const [transfer, setTransfer] = useState(null);
  const [wallet, setWallet] = useState(walletType[0]);


  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [narration, setNarration] = useState("");
  const [bankSwift, setBankSwift] = useState("");
  const [Country, setCountry] = useState("");

  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Kindly note that user’s can only send Naira to Naira, Dollars to</Text>
        <Text style={styles.text}>Dollars, Pounds to Pounds and you can also send Pounds and</Text>
        <Text style={styles.text}>Dollars to a Naira account.</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View>
          <View style={styles.textInputMainContainer}>
            <Text style={styles.label}>Wallet</Text>
              <Selector wallet={wallet} setFunc={setWallet} data={walletType} placeholder={"Select your PayVerv wallet"} />
            </View>
          <View style={styles.textInputMainContainer}>
            <Text style={styles.label}>Select transfer type</Text>
              <Selector wallet={wallet} setFunc={setTransfer} data={transferType} placeholder={"Select transfer type"} />
            </View>
        </View>
        <View>
          <TransferInput type={transfer} 
            bankName={bankName}
            setBankName={setBankName}
            accountNumber={accountNumber}
            setAccountNumber={setAccountNumber}
            amount={amount}
            setAmount={setAmount}
            narration={narration}
            setNarration={setNarration}
            Country={Country}
            setCountry={setCountry}
            bankSwift={bankSwift}
            setBankSwift={setBankSwift}
          />
        </View>
        <TouchableOpacity 
          style={styles.btnContainer} 
          onPress={ () => navigation.navigate(
            "Review", 
            {bankName, 
            accountNumber,
            amount,
            narration,
            Country,
            bankSwift
            })} >
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  ) 
}