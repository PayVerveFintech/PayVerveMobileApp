import { View, Text, SafeAreaView, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import CustomTextInput from "../../components/customTextInput";
import { Button } from '../../components/ButtonComponent/Button';
import DatePicker from '../../components/datePicker';









export default function NewTargetSaving() {

  const navigation = useNavigation();

  const [targetAmount, setTargetAmount] = useState("");
  const [targetName, setTargetName] = useState("");
  const [frequency, setFrequency] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  
  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };


  return (
   <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Ionicons name='arrow-back' size={25} style={styles.icon} onPress={ () => navigation.goBack()} />
        <Text style={styles.title}>Target Saving</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Take control of your financial journey with precision and purpose.</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView behavior='padding'>
          <View style={styles.inputContainer}>
            <CustomTextInput
              title={"Target  name"}
              placeHolder={"Enter target name"}
              value={targetName}
              setValue={setTargetName}
            />
            <CustomTextInput
              title={"Target amount"}
              placeHolder={"Enter target amount"}
              value={targetAmount}
              setValue={setTargetAmount}
              isNumber={true}
            />
            <CustomTextInput
              title={"Frequency"}
              placeHolder={"How often"}
              value={frequency}
              setValue={setFrequency}
            />
            </View>
            <View style={styles.dateContainer}>
              <View>
                <DatePicker title={"Start Date"} onChange={handleStartDateChange} />
              </View>
              <View>
                <DatePicker title={"End Date"} onChange={handleEndDateChange} />
              </View>
            </View>
          <View style={styles.buttonContainer}>
            <Button 
              btn_text={"create"}
              onPress={ () => navigation.navigate("SaveReview", {
                targetName,
                targetAmount,
                frequency,
                // startDate,
                // endDate,
              })}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
   </SafeAreaView>
  )
}