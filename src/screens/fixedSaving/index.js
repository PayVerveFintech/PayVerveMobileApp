import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { styles } from './style'
import CustomTextInput from '../../components/customTextInput';
import { Button } from '../../components/ButtonComponent/Button';
import DatePicker from '../../components/datePicker.js/datePicker';






export default function FixedSaving() {

    const navigation = useNavigation();

    const [savingName, setSavingName] = useState("");
    const [amount, setAmount] = useState("");
    const [duration, setDuration] = useState("");
    const [date, setDate] = useState("");
    
    const handleDate = (date) => {
        setDate(date)
    }

  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.header}>
            <Ionicons name='arrow-back' size={25} style={styles.icon} onPress={ () => navigation.goBack()} />
            <Text style={styles.title}>Fixed Saving</Text>
        </View>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Resist temptation, and take comfort in the certainty of saving for a promising future.</Text>
        </View>
        <ScrollView 
            style={styles.input}
            showsVerticalScrollIndicator={false}
        >
            <KeyboardAvoidingView behavior='padding'>
                <CustomTextInput 
                    value={savingName} 
                    setValue={setSavingName}
                    title={"Give your saving a name"}
                    placeHolder={"Enter saving name"}
                />
                <CustomTextInput 
                    value={amount} 
                    setValue={setAmount}
                    title={"Amount"}
                    placeHolder={"Enter the amount"}
                    isNumber={true}
                />
                <CustomTextInput 
                    value={duration} 
                    setValue={setDuration}
                    title={"Duration"}
                    placeHolder={"Enter the duration"}
                />
               <View>
                <DatePicker
                    title={"Duration Date"}
                    onChange={handleDate}
                />
               </View>
            <View style={styles.buttonContainer}>
                <Button 
                    btn_text="Next"
                    onPress={ () => navigation.navigate("SaveReview", 
                    {
                        amount, 
                        duration, 
                        date,
                        savingName
                    })}
                />
            </View>
            </KeyboardAvoidingView>
        </ScrollView>
    </SafeAreaView>
  )
}