import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Color } from '../../color/Color';

import { styles } from './style';






export default function TransactionHistory({ history }) {
  return (
    <View>
      {
        history?  (
          <View>
            <Text style={styles.historyLabel}>Transaction History</Text>
              <ScrollView>
                <View>
                    <View>
                        <Text style={styles.date}>Wed, Dec 25 2023</Text>
                    </View>
                    <View style={styles.historyContainer} >
                        <View style={styles.historyDetailsContainer}>
                            <MaterialCommunityIcons name="swap-horizontal-circle" size={25} color={Color.primary} style={styles.icon} /> 
                            <View style={styles.transactionDetailsContainer}>
                                <Text style={styles.label}>Money Sent</Text>      
                                <Text style={styles.name}>Olamide Oladele</Text>
                            </View>
                        </View>
                        <View style={styles.amountContainer}>
                            <Text style={styles.amount}> {"#5,000"} </Text>
                            <Text style={styles.transactionType}> {"Debit"} </Text>
                        </View>
                    </View>
                    <View>
                    <View>
                        <Text style={styles.date}>Wed, Dec 25 2023</Text>
                    </View>
                    <View style={styles.historyContainer} >
                        <View style={styles.historyDetailsContainer}>
                            <MaterialCommunityIcons name="swap-horizontal-circle" size={25} color={Color.primary} style={styles.icon} /> 
                            <View style={styles.transactionDetailsContainer}>
                                <Text style={styles.label}>Money Sent</Text>      
                                <Text style={styles.name}>Olamide Oladele</Text>
                            </View>
                        </View>
                        <View style={styles.amountContainer}>
                            <Text style={styles.amount}> {"#5,000"} </Text>
                            <Text style={styles.transactionType}> {"Debit"} </Text>
                        </View>
                    </View>
                    </View>
                </View>
              </ScrollView>
          </View>
        ) : (
          <View style={styles.noHistoryContainer}>
            <Text style={styles.noHistoryLabel}>There is nothing to see at the moment</Text>
            <View>
              <Text style={styles.noHistory}>Your transaction history will be displayed </Text>
              <Text style={styles.noHistory}>here when you carry out a transaction.</Text>
            </View>
          </View>
        )
      }
    </View>
  )
}