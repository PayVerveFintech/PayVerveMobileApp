import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NewUser } from '../../context/userContext';

import { styles } from './style';





export default function Review({ route }) {

  const navigation = useNavigation();

  const { accountNumber, amount,narration, wallet } = route.params;

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
     <View style={styles.container}>
        <View style={styles.detailsContainer}>
            <View>
                <Text style={styles.label}>Transfer from your</Text>
                <Text style={styles.label}> {wallet} </Text>
            </View>
            <View>
                <Text style={styles.negative}>Debit- {amount}</Text>
            </View>
        </View>
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
        <View style={styles.detailsContainer}>
            <View>
                <Text style={styles.label}>Commission</Text>
            </View>
            <View>
                <Text style={styles.positive}> {"Free"} </Text>
            </View>
        </View>
        <View style={styles.detailsContainer}>
            <View>
                <Text style={styles.label}>Total Debit</Text>
            </View>
            <View>
                <Text style={styles.negative}> {amount} </Text>
            </View>
        </View>
     </View>
     <TouchableOpacity style={styles.btnContainer} onPress={ () => handlePress()}>
      <Text style={styles.btnText}>Pay</Text>
     </TouchableOpacity>
    </View>
  )
}