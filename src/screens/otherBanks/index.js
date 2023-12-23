import { View, Text, TextInput, TouchableOpacity, } from 'react-native'
import React, {useState} from 'react';
import { AntDesign } from "@expo/vector-icons";


import { styles } from './style';
import { Color } from '../../color/Color';
import { Selector } from '../../components/selector';





export default function OtherBanks() {

  const walletType = ["Naira wallet", "Dollar wallet", "Pound wallet"];
  const transferType = ["Local", "Foreign"];

  const [transfer, setTransfer] = useState();
  const [wallet, setWallet] = useState(walletType[0]);

  return (
    <View style={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Kindly note that user’s can only send Naira to Naira, Dollars to</Text>
        <Text style={styles.text}>Dollars, Pounds to Pounds and you can also send Pounds and</Text>
        <Text style={styles.text}>Dollars to a Naira account.</Text>
      </View>
      <View>
        <View style={styles.textInputMainContainer}>
          <Text style={styles.label}>Wallet</Text>
            <Selector wallet={wallet} setFunc={setTransfer} data={walletType} placeholder={"Select your PayVerv wallet"} />
          </View>
        <View style={styles.textInputMainContainer}>
          <Text style={styles.label}>Select transfer type</Text>
            <Selector wallet={wallet} setFunc={setWallet} data={transferType} placeholder={"Select transfer type"} />
          </View>
      </View>
      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Send</Text>
      </TouchableOpacity>
    </View>
  ) 
}