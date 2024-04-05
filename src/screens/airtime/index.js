import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { MobileNetworks } from '../../components/MobileNetworks/MobileNetworks';
import CustomTextInput from '../../components/customTextInput';
import { Button } from '../../components/ButtonComponent/Button';
import { styles } from './styles';







export default function Airtime() {

    const navigation = useNavigation();

    const airtimeAmount = ["100", "200", "500", "1000", "2000", "5000"];

    const renderItem = ({item, index}) => {
        return(
            <TouchableOpacity style={styles.airtimeAmount}>
                <Text style={styles.airtimeText}> {item} </Text>
            </TouchableOpacity>
        )
    }

    const [amount, setAmount] = useState("");
    const [number, setNumber] = useState("");

  return (
   <SafeAreaView style={styles.root}>
    <View style={styles.header}>
        <Ionicons name='arrow-back' size={25} style={styles.icon} onPress={ () => navigation.goBack()} />
        <Text style={styles.title}> Airtime</Text>
    </View>
    <View style={styles.networkMainContainer}>
        <Text style={styles.networkTitle}>Select network</Text>
        <View style={styles.networkContainer}>
            <MobileNetworks />
            <Text style={styles.amount}>Select amount</Text>
        </View>
    </View>
    <View style={styles.flatlistContainer}>
        <FlatList
            data={airtimeAmount}
            renderItem={renderItem}
            numColumns={3}
            scrollEnabled={false}
        />
    </View>
    <View style={styles.textInputContainer}>
        <CustomTextInput
            title={"Amount"}
            placeHolder={"Enter the amount"}
            value={amount}
            setValue={setAmount}
        />
        <CustomTextInput
            title={"Number"}
            placeHolder={"Enter the number"}
            value={number}
            setValue={setNumber}
        />
    </View>
    <Button
        btn_text={"Proceed"}
        onPress={ () => navigation.navigate("Review", {amount, number})}
    />
   </SafeAreaView>
  )
}