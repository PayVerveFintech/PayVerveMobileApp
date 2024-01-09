import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { styles } from './style';
import { service } from '../../service/service';
import TransactionHistory from '../../components/transactionHistory';






export default function Home() {


    const navigation = useNavigation();

    const [history, setHistory] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const wallet = [
        {
            id: 1,
            name: "NGR Balance",
            balance: "20000"
        },
        {
            id: 2,
            name: "Dollar Balance",
            balance: "1000"
        },
        {
            id: 3,
            name: "Pound Balance",
            balance: "7900"
        },
    ]



    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };

      const [activeWallet, setActiveWallet] = useState(wallet[0])

    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity style={styles.serviceMainContainer} onPress={() => navigation.navigate(item.screen) } >
                <View style={styles.serviceContainer}>
                    {item.iconFamily === 'Ionicons' && <Ionicons name={item.icon} size={25} />}
                    <Text style={styles.serviceText}> {item.name} </Text>
                </View>
            </TouchableOpacity>
        )
    }

        // Assuming your screen width is 100%
    const screenWidth = 100;

    // Convert wp(90) to an absolute width
    const absoluteWidth = (wp(94) * screenWidth) / 100;


  return (
    <SafeAreaView style={styles.root}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.nameContainer}>
                    <Text style={styles.welcomeText}> {"Welcome back"} </Text>
                    <Text style={styles.name}> {"Olamide Oladele"} </Text>
                </View>
                <View>
                    <MaterialCommunityIcons name="bell-outline" size={26} color="black"  />
                </View>
            </View>
            <View style={styles.accountDetailsContainer}>
                <FlatList 
                    data={wallet}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled 
                    snapToAlignment='center'
                    snapToInterval={absoluteWidth}
                    renderItem={({ item, index }) => {
                        let isActiveWallet = item == activeWallet;
                        return(
                            <View style={styles.accountDetails}>
                                <Pressable style={styles.accountTypeInnerContainer} onPress={ () => setActiveWallet(index)}>
                                    <Text style={styles.accountType}> {item.name} </Text>
                                    {
                                        isVisible? (
                                            <Text style={styles.balance}> {item.balance} </Text>
                                        ) : (
                                            <Text style={styles.hidden}>****</Text>
                                        )
                                    }
                                </Pressable>
                                <TouchableOpacity onPress={ () => toggleVisibility()}>
                                    <Feather name={isVisible? 'eye-off' : "eye"} size={25} />
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
            <View style={styles.serviceRoot}>
                <Text style={styles.label}>Quick Access</Text>
                <View style={styles.serviceBg}>
                    <FlatList
                        data={service}
                        renderItem={renderItem}
                        numColumns={4}
                        decelerationRate={"fast"}
                        showsVerticalScrollIndicator={false}
                        scrollEnabled={false}
                    />
                </View>
            </View>
            <View style={styles.history}>
                <TransactionHistory history={history} />
            </View>
        </View>
    </SafeAreaView>
  )
}