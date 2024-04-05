import React, { useState } from "react";
import { View, Text } from "react-native";
import CustomPinScreen from "../../components/customPinScreen";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";

export default function ConfirmScreen() {
  const navigation = useNavigation();

  // State to store the PIN entered in CustomPinScreen
  const [enteredPin, setEnteredPin] = useState("");

  // Function to update enteredPin
  const updateEnteredPin = (pin) => {
    setEnteredPin(pin.join("")); // Convert the array to a string if needed
  };

  return (
    <View style={styles.root}>
      <CustomPinScreen
        title={"Confirm Transaction Pin"}
        onUpdateEnteredPin={updateEnteredPin}
        screen={"ConfirmScreen"}
      />
    </View>
  );
}