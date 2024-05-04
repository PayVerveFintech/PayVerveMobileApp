import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Pressable } from 'react-native'
import React, { useContext, useState, useRef } from 'react';
import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { styles } from './style';
import { service } from '../../service/service';
import TransactionHistory from '../../components/transactionHistory';
import { ScrollView } from 'react-native-gesture-handler';
import { useAuth } from '../../context/AuthContext';
import { userInfo } from '../../context/userInfo';
// import { NewUser } from '../../context/userContext';

export default function Home() {


    const navigation = useNavigation();

    // const newUser = useContext(NewUser);
    const [newUser, setNewUser] = useState(false);

    const [isVisible, setIsVisible] = useState(true);

    const { fetchWallets } = userInfo();


    // List of availabe walllet

    const wallet = fetchWallets(); // fetch wallets using the Context API (UserInfoContext)
    /* [
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
    ] */


    // func to toggle wallet balance

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const [activeWallet, setActiveWallet] = useState(wallet === null ? null : wallet[0])

    const flatListRef = useRef(null);

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / absoluteWidth);
        setActiveWallet(wallet[index]);
    };

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={styles.serviceMainContainer} onPress={() => navigation.navigate(item.screen)} >
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

    // get currency symbol

    const getCurrencySymbol = (walletType) => {
        switch (walletType) {
            case 'NGR Balance':
                return '₦'; // Nigerian Naira
            case 'Dollar Balance':
                return '$'; // US Dollar
            case 'Pound Balance':
                return '£'; // British Pound
            default:
                return '';
        }
    };

    const { authState } = useAuth(); // get user data

    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.welcomeText}> {"Welcome back"} </Text>
                        <Text style={styles.name}> {authState.userData.first_name} </Text> {/* first_name is a ref to fullnames  */}
                    </View>
                    <View>
                        <MaterialCommunityIcons name="bell-outline" size={26} color="black" />
                    </View>
                </View>
                <View style={styles.accountDetailsContainer}>
                    <FlatList
                        data={wallet}
                        ref={flatListRef}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        pagingEnabled
                        snapToAlignment='center'
                        onScroll={handleScroll}
                        snapToInterval={absoluteWidth}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={styles.accountDetails}>
                                    <View style={styles.accountTypeInnerContainer} >
                                        <Text style={styles.accountType}>{item.name} </Text>
                                        {
                                            isVisible ? (
                                                <Text style={styles.balance}>{getCurrencySymbol(activeWallet.name)} {activeWallet.balance} </Text>
                                            ) : (
                                                <Text style={styles.hidden}> ****</Text>
                                            )
                                        }
                                    </View>
                                    <TouchableOpacity onPress={() => toggleVisibility()}>
                                        <Feather name={isVisible ? 'eye-off' : "eye"} size={25} />
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                    />
                </View>
                <View style={styles.dotContainer}>
                    {
                        wallet.map((item, index) => {
                            return (
                                <View key={index} style={[styles.dot, index === activeWallet.id - 1 ? styles.activeDot : null]}>
                                </View>
                            )
                        })
                    }
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
                <ScrollView style={styles.history}>
                    <TransactionHistory history={newUser} />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}