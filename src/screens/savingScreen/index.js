import { View, Text, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import { savePlans } from '../../service/savePlans';
import { Button } from '../../components/ButtonComponent/Button';








export default function SavingScreen() {

  
    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.root} >
        <View style={styles.header}>
            <Ionicons name='arrow-back' size={25} style={styles.icon} onPress={ () => navigation.goBack()} />
            <Text style={styles.title}> {item.saveType} </Text>
        </View>
        <View style={styles.container}>
           <Image 
            source={item.image}
            style={styles.image}
           />
        </View>
        <View style={styles.contentMainContainer}>
            { item.timeFrame &&
            <View style={styles.contenContainer}>
                <Image 
                    source={require("../../../assets/time.png")}
                    style={styles.imageIcon}
                />
                <Text style={styles.text}> {item.timeFrame} </Text>
            </View>
            }
            <View style={styles.contenContainer}>
                <Image 
                    source={require("../../../assets/trusted.png")}
                    style={styles.imageIcon}
                />
                <Text style={styles.text}> {item.trust} </Text>
            </View>
            <View style={styles.contenContainer}>
            <Image 
                    source={require("../../../assets/secure-data.png")}
                    style={styles.imageIcon}
                />
                <Text style={styles.text}> {item.security} </Text>
            </View>
            { item.financialGrowth &&
            <View style={styles.contenContainer}>
                <Image 
                    source={require("../../../assets/money-bag.png")}
                    style={styles.imageIcon}
                />
                <Text style={styles.text}> {item.financialGrowth} </Text>
            </View>
            }
        </View>
        <View>
            <Button btn_text={"Create"} onPress={ () => navigation.navigate(item.screen)} />
        </View>
    </SafeAreaView>
  )
}