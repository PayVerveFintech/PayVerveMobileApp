import { View, Text, TextInput, TouchableOpacity, ScrollView, } from 'react-native'
import React, {useState} from 'react';
import { AntDesign } from "@expo/vector-icons";


import { styles } from './style';
import { Color } from '../../color/Color';
import { Selector } from '../../components/selector';
import TransferInput from '../../components/transferInput';





export default function OtherBanks() {

  const walletType = ["Naira wallet", "Dollar wallet", "Pound wallet"];
  const transferType = ["Local", "Foreign"];

  const [transfer, setTransfer] = useState(null);
  const [wallet, setWallet] = useState(walletType[0]);

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
          <TransferInput type={transfer} />
        </View>
        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Send</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  ) 
}