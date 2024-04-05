import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, } from 'react-native'
import React, {useState} from 'react';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


import { styles } from './style';
import { Color } from '../../color/Color';
import { Selector } from '../../components/selector';
import TransferInput from '../../components/transferInput';
import { Button } from '../../components/ButtonComponent/Button';
import CustomTextInput from '../../components/customTextInput';





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
        <KeyboardAvoidingView behavior='padding'>
          <View>
            <View style={styles.textInputMainContainer}>
              <Text style={styles.label}>Wallet</Text>
                <Selector wallet={wallet} setFunc={setWallet} data={walletType} placeholder={"Select your PayVerve wallet"} />
              </View>
            <View style={styles.textInputMainContainer}>
              <Text style={styles.label}>Select transfer type</Text>
                <Selector setFunc={setTransfer} data={transferType} placeholder={"Select transfer type"} />
              </View>
          </View>
          
                  {
            transfer === "Local" ? (
              <View>
                <CustomTextInput
                  title={"Bank Name"}
                  placeHolder={"Enter bank name"}
                  value={bankName}
                  setValue={setBankName}
                />
                <CustomTextInput
                  title={"Account Number"}
                  placeHolder={"Enter the account number"}
                  value={accountNumber}
                  setValue={setAccountNumber}
                  isNumber={true}
                />
                <CustomTextInput
                  title={"Amount"}
                  placeHolder={"Enter the amount"}
                  value={amount}
                  setValue={setAmount}
                  isNumber={true}
                />
                <CustomTextInput
                  title={"Narration"}
                  placeHolder={"Enter the narration"}
                  value={narration}
                  setValue={setNarration}
                />
              </View>
            ) : transfer === "Foreign" ? (
              <View>
                <CustomTextInput
                  title={"Country"}
                  placeHolder={"Enter the country"}
                  value={Country}
                  setValue={setCountry}
                />
                <CustomTextInput
                  title={"Bank Name"}
                  placeHolder={"Enter bank name"}
                  value={bankName}
                  setValue={setBankName}
                />
                <CustomTextInput
                  title={"Bank Swift"}
                  placeHolder={"Enter the swift code"}
                  value={bankSwift}
                  setValue={setBankSwift}
                />
                <CustomTextInput
                  title={"Account Number"}
                  placeHolder={"Enter the account number"}
                  value={accountNumber}
                  setValue={setAccountNumber}
                  isNumber={true}
                />
                <CustomTextInput
                  title={"Amount"}
                  placeHolder={"Enter the amount"}
                  value={amount}
                  setValue={setAmount}
                  isNumber={true}
                />
                <CustomTextInput
                  title={"Narration"}
                  placeHolder={"Enter the narration"}
                  value={narration}
                  setValue={setNarration}
                />
              </View>
            ) : (
              <View />
            )
          }
        
          <View style={styles.buttonContainer}>
            <Button
              btn_text={"Send"}
              onPress={ () => navigation.navigate(
                "TransferReview",
                { bankName, 
                  accountNumber,
                  amount,
                  narration,
                  Country,
                  bankSwift,
                  wallet,
                }
              )}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  ) 
}