import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    FlatList,
    ScrollView,
  } from 'react-native';
  import React, { useState, useRef } from 'react';
  import { MaterialCommunityIcons, Feather, Ionicons } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/native';
  import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
  import { styles } from './style';
  import { service } from '../../service/service';
  import TransactionHistory from '../../components/transactionHistory';
  
  export default function Home() {

    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(true);
    const [activeWallet, setActiveWallet] = useState(0);
    const [newUser, setNewUser] = useState(false)
    const flatListRef = useRef(null);
  
    // Wallet data
    const wallet = [
      { id: 1, name: 'NGR Balance', balance: '20000' },
      { id: 2, name: 'Dollar Balance', balance: '1000' },
      { id: 3, name: 'Pound Balance', balance: '7900' },
    ];
  
    // Get currency symbol
    const getCurrencySymbol = (walletType) => {
      switch (walletType) {
        case 'NGR Balance':
          return '₦';
        case 'Dollar Balance':
          return '$';
        case 'Pound Balance':
          return '£';
        default:
          return '';
      }
    };
  
    // Toggle balance visibility
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  
    // Handle scroll and determine active wallet
    const handleScroll = (event) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offsetX / wp(100)); 
      setActiveWallet(index);
    };
  
    // Render services
    const renderServiceItem = ({ item }) => (
      <TouchableOpacity
        style={styles.serviceMainContainer}
        onPress={() => navigation.navigate(item.screen)}
      >
        <View style={styles.serviceContainer}>
          {item.iconFamily === 'Ionicons' && <Ionicons name={item.icon} size={25} />}
          <Text style={styles.serviceText}> {item.name} </Text>
        </View>
      </TouchableOpacity>
    );
  
    return (
      <SafeAreaView style={styles.root}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <View style={styles.nameContainer}>
              <Text style={styles.welcomeText}>Welcome back</Text>
              <Text style={styles.name}>Olamide Oladele</Text>
            </View>
            <MaterialCommunityIcons name="bell-outline" size={26} color="black" />
          </View>
  
          {/* Wallet Details */}
          <View style={styles.accountDetailsContainer}>
            <FlatList
              data={wallet}
              ref={flatListRef}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              snapToAlignment="center"
              onScroll={handleScroll}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.accountDetails}>
                  <View style={styles.accountTypeInnerContainer}>
                    <Text style={styles.accountType}>{item.name}</Text>
                    {isVisible ? (
                      <Text style={styles.balance}>
                        {getCurrencySymbol(item.name)} {item.balance}
                      </Text>
                    ) : (
                      <Text style={styles.hidden}>****</Text>
                    )}
                  </View>
                  <TouchableOpacity onPress={toggleVisibility}>
                    <Feather name={isVisible ? 'eye-off' : 'eye'} size={25} />
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
  
          {/* Dots for wallet indicators */}
          <View style={styles.dotContainer}>
            {wallet.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, activeWallet === index ? styles.activeDot : null]}
              />
            ))}
          </View>
  
          {/* Services */}
          <View style={styles.serviceRoot}>
            <Text style={styles.label}>Quick Access</Text>
            <View style={styles.serviceBg}>
              <FlatList
                data={service}
                renderItem={renderServiceItem}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
  
          {/* Transaction History */}
          <ScrollView style={styles.history}>
            <TransactionHistory history={newUser} />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
  