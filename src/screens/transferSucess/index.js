import { View, Text, SafeAreaView } from "react-native";
import react, { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { Color } from "../../color/Color";
import { styles } from "./styles";







export default function TransferSucess() {

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() =>{
      navigation.navigate("AppHome")
    }, 2000)
  }, [])
  return(
    <SafeAreaView style={styles.root}>
      <View style={styles.popUp}>
        <Ionicons name="checkmark-circle-outline" size={60} color={Color.green} />
        <Text style={styles.text}>Your transfer is sucessful</Text>
      </View>
      <View>
        <View style={styles.container}>
          <Ionicons name="save" size={20} color={"black"} style={styles.icon} />
          <Text style={styles.text2}>Save as Beneficiary</Text>
        </View>
        <View style={styles.container}>
          <Ionicons name="share" size={20} color={"black"} style={styles.icon} />
          <Text style={styles.text2}>Share Receipt</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}