import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { Button } from '../../components/ButtonComponent/Button';



export default function SaveReview() {

    const navigation = useNavigation();
    const route = useRoute();

    const {
        amount, 
        duration, 
        date,
        savingName,
        targetName,
        targetAmount,
        frequency,
        startDate,
        endDate,
        interest,
        interestYield,
        totalAmount,
    } = route.params;

  return (
    <SafeAreaView style={styles.root} > 
        <View style={styles.header}>
            <Ionicons name='arrow-back' size={25} style={styles.icon} onPress={ () => navigation.goBack()} />
            <Text style={styles.title}>Review</Text>
        </View>
        <View style={styles.contentContainer}>
            {
                savingName && 
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Saving name</Text>
                    <Text style={styles.contentText}>{savingName} </Text>
                </View>
            }

            {
                targetName &&
                <View style={styles.content}>
                    <Text style={styles.contentTitle}>Target Name</Text>
                    <Text style={styles.contentText}>{targetName} </Text>
                </View>
            }

            {
                amount && 
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>Amount</Text>
                    <Text style={styles.contentText}>₦{amount} </Text>
                </View>
            }

            {
                targetAmount &&
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>Target Amount</Text>
                    <Text style={styles.contentText}>₦{targetAmount} </Text>
                </View>
            }

            {
                interest &&
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>Interest Rate</Text>
                    <Text style={styles.contentText}>{"10%  p.a"} </Text>
                </View> 
            }

            {
                interestYield &&
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>Interest Yield</Text>
                    <Text style={styles.contentText}>₦{"100"} </Text>
                </View>
            }

            {
                frequency &&
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>Frequency</Text>
                    <Text style={styles.contentText}>{frequency}</Text>
                </View>
            }

            {
                duration &&
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>Duration</Text>
                    <Text style={styles.contentText}>{duration} </Text>
                </View>
            }

            {
                totalAmount &&   
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>Total Amount</Text>
                    <Text style={styles.contentText}>₦{"1100"} </Text>
                </View>
            }

            {
                date &&
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>Maturity Date</Text>
                    <Text style={styles.contentText}>{date.toDateString()} </Text>
                </View>
            }

            {
                startDate &&
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>Start Date</Text>
                    <Text style={styles.contentText}>{startDate.toDateString()} </Text>
                </View>
            }
            {
                startDate &&
                <View style={styles.content}>
                    <Text  style={styles.contentTitle}>End Date</Text>
                    <Text style={styles.contentText}>{endDate.toDateString()} </Text>
                </View>
            }
        </View>
        <View style={styles.noteContainer}>
            <Text style={styles.noteTitle}>Note</Text>
            <Text style={styles.noteText}>An Attraction fee of 5% will be deducted if you choose to withdraw your savings before maturity date.</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button btn_text={"create"} onPress={ () => navigation.navigate("ConfirmScreen")} />
        </View>
    </SafeAreaView>
  )
} 