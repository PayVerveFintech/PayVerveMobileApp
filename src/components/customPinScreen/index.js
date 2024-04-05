import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./style";
import PinScreen from "../../screens/transferSucess";

const CustomPinScreen = ({ title, onUpdateEnteredPin, screen }) => {
  const navigation = useNavigation();
  const [pin, setPin] = useState(["", "", "", ""]);

  const keyNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "X"];

  useEffect(() => {
    // Check if all PIN digits are entered (not empty)
    if (pin.every((value) => value !== "")) {
      // Check the current screen name

      if (screen === "PinScreen") {
        // Call the parent component's function to update the enteredPin
        onUpdateEnteredPin(pin);

        // Auto navigate to ConfirmScreen if the current screen is PinScreen
        navigation.navigate("ConfirmScreen");
      } else if (screen === "ConfirmScreen") {
        // Auto navigate to SuccessPage if the current screen is ConfirmScreen
        navigation.navigate("TransferSucess");
      }
    }
  }, [pin, onUpdateEnteredPin, navigation, screen]);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.keyContainer}
        onPress={() => handleKeyPress(item)}
        accessible={true}
        accessibilityLabel={`Key ${item}`}
      >
        <Text style={styles.key}>{item}</Text>
      </TouchableOpacity>
    );
  };

  const handleKeyPress = (key) => {
    if (key === "X") {
      clearPin();
    } else {
      const index = pin.findIndex((value) => value === "");
      if (index !== -1) {
        const newPin = [...pin];
        newPin[index] = key.toString();
        setPin(newPin);
        // Call the parent component's function to update the enteredPin
        onUpdateEnteredPin(newPin);
      }
    }
  };

  const clearPin = () => {
    setPin(["", "", "", ""]);
  };

  return (
    <View style={styles.root}>
      <View>
        <View style={styles.header}>
          <Ionicons
            name="arrow-back"
            size={25}
            style={styles.icon}
            onPress={() => navigation.goBack()}
          />
          <View>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
        <View style={styles.textInputContainer}>
          {pin.map((value, index) => (
            <TextInput
              key={index.toString()}
              maxLength={1}
              keyboardType="number-pad"
              style={styles.input}
              value={value}
              onChangeText={() => {}}
            />
          ))}
        </View>
        <View style={styles.flatListContainer}>
          <FlatList
            data={keyNumber}
            numColumns={3}
            scrollEnabled={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </View>
  );
};

export default CustomPinScreen;