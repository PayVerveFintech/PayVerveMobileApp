import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import { NewUser } from '../../context/userContext';
import { Ionicons } from "@expo/vector-icons";

import { styles } from './style';





export default function TransferReview({ route }) {

    const [NewUser, setNewUser] = useState(true);

  const navigation = useNavigation();

  const {
    accountNumber, 
    amount,
    narration, 
    wallet,
    bankName,
    accountName,
    bankSwift
 } = route.params;

  const newUser = useContext(NewUser);

  const handlePress = () => {
    if(newUser) {
        navigation.navigate("PinScreen")
    } else {
        navigation.navigate("ConfirmScreen")
    }
  }

  return (
    <View style={styles.root}>
        <View style={styles.header}>
            <Ionicons name='arrow-back' size={25} style={styles.icon} onPress={ () => navigation.goBack()} />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Review</Text>
            </View>
        </View>
     <View style={styles.container}>
        {
            wallet &&
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.label}>Transfer from your</Text>
                    <Text style={styles.label}> {wallet} </Text>
                </View>
                <View>
                    <Text style={styles.negative}>Debit- {amount}</Text>
                </View>
            </View>
        }
        {
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.label}>To Olamide Oladele</Text>
                    <Text  style={styles.label}> {"Wema Bank"} </Text>
                </View>
                <View>
                    <Text style={styles.positive}>Credit- {amount}</Text>
                    <Text style={styles.number}> {"09152777025"} </Text>
                </View>
            </View>
        }
        {
            bankSwift &&
             <View style={styles.detailsContainer}>
             <View>
                 <Text style={styles.label}>Swift Code</Text>
             </View>
             <View>
                 <Text style={styles.number}>{bankSwift}</Text>
             </View>
         </View>
        }
        {
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.label}>Commission</Text>
                </View>
                <View>
                    <Text style={styles.positive}> {"Free"} </Text>
                </View>
            </View>
        }
        {
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.label}>Total Debit</Text>
                </View>
                <View>
                    <Text style={styles.negative}> {amount} </Text>
                </View>
            </View>
        }
     </View>
     <TouchableOpacity style={styles.btnContainer} onPress={ () => handlePress()}>
      <Text style={styles.btnText}>Pay</Text>
     </TouchableOpacity>
    </View>
  )
}