import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useState } from 'react';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

import { styles } from './style';
import SavingScreen from '../savingScreen';
import { savePlans } from '../../service/savePlans';
import { Button } from '../../components/ButtonComponent/Button';





export default function TargetSavingPlan() {
  
  const navigation = useNavigation();

  const [hasSaving, setHasSaving] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Ionicons name='arrow-back' size={25} style={styles.icon} />
        <Text style={styles.title}> {"Target Saving"} </Text>
      </View>
      <View>
      {
        hasSaving? (
          <View>
            <View style={styles.container}>
              <Text style={styles.saveTitle}>Rent</Text>
              <Text style={styles.saveAmount}>N100,000</Text>
              <Text style={styles.saveInterestTitle}>Interest rate</Text>
              <Text style={styles.saveInterest}>10 p.a</Text>
              <View style={styles.saveContainer}>
                <View style={styles.durationContainer}>
                  <Text style={styles.durationTitle}>Duration</Text>
                  <Text style={styles.duration}>10 months</Text>
                </View>
                <View>
                  <Text style={styles.dateTitle}>Matured Date</Text>
                  <Text style={styles.date}>18/09/2024</Text>
                </View>
              </View>
            </View>
            <View style={styles.addButton}>
              <Ionicons name='md-add-circle-outline' color={"green"} size={50} onPress={ () => navigation.navigate("TargetSaving")} />
            </View>
          </View>
          
        ) : (
          <View style={styles.createMainContainer}>
             <View style={styles.CreateContainer}>
           <Image 
            source={savePlans[0].image}
            style={styles.image}
           />
        </View>
        <View style={styles.contentMainContainer}>
            { savePlans[0].timeFrame &&
            <View style={styles.contenContainer}>
                <Image 
                    source={require("../../../assets/time.png")} 
                    style={styles.imageIcon}
                />
                <Text style={styles.text}> {savePlans[0].timeFrame} </Text>
            </View>
            }
            <View style={styles.contenContainer}>
                <Image 
                    source={require("../../../assets/trusted.png")}
                    style={styles.imageIcon}
                />
                <Text style={styles.text}> {savePlans[0].trust} </Text>
            </View>
            <View style={styles.contenContainer}>
            <Image 
                    source={require("../../../assets/secure-data.png")}
                    style={styles.imageIcon}
                />
                <Text style={styles.text}> {savePlans[0].security} </Text>
            </View>
            { savePlans.financialGrowth &&
            <View style={styles.contenContainer}>
                <Image 
                    source={require("../../../assets/money-bag.png")}
                    style={styles.imageIcon}
                />
                <Text style={styles.text}> {savePlans.financialGrowth} </Text>
            </View>
            }
        </View>
        <View>
            <Button btn_text={"Create"} onPress={ () => navigation.navigate("TargetSaving")} />
        </View>
          </View>
        )
      }
      </View>
    </SafeAreaView>
  )
}