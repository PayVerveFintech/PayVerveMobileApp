import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { service } from '../../service/service';
import TransactionHistory from '../../components/transactionHistory';






export default function Home() {


    const navigaton = useNavigation();

    const [history, setHistory] = useState(false);
    const [isVisible, setIsVisible] = useState(true);


    const toggleVisibility = () => {
        setIsVisible(!isVisible);
      };


    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity style={styles.serviceMainContainer} onPress={() => navigaton.navigate(item.screen) } >
                <View style={styles.serviceContainer}>
                    {item.iconFamily === 'Ionicons' && <Ionicons name={item.icon} size={25} />}
                    <Text style={styles.serviceText}> {item.name} </Text>
                </View>
            </TouchableOpacity>
        )
    }

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
                <View style={styles.accountDetails}>
                    <Text style={styles.accountType}>NGN Balance</Text>
                    {
                        isVisible? (
                            <Text style={styles.balance}> {"#20,200"} </Text>
                        ) : (
                            <Text style={styles.hidden}>****</Text>
                        )
                    }
                </View>
                <TouchableOpacity onPress={ () => toggleVisibility()}>
                    <Feather name={isVisible? 'eye-off' : "eye"} size={25} />
                </TouchableOpacity>
            </View>
            <View style={styles.serviceRoot}>
                <Text style={styles.label}>Quick Access</Text>
                <View style={styles.serviceBg}>
                    <FlatList
                        data={service}
                        renderItem={renderItem}
                        numColumns={4}
                        showsVerticalScrollIndicator={false}
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