import React from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigation } from "./topTab";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/home"
import { TouchableOpacity } from "react-native";
import Review from '../screens/review';
import PinScreen from '../screens/pinScreen';
import ConfirmScreen from '../screens/confirmScreen';
import TransferSucess from '../screens/transferSucess';









const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerLeft: () => {
            const navigation = useNavigation(); // Use the useNavigation hook here
            return (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={25}/>
              </TouchableOpacity>
            );
          },
        }}
      >
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="Transfer" component={TopNavigation} />
        <Stack.Screen name='Review' component={Review} />
        <Stack.Screen name='PinScreen' component={PinScreen} options={{ headerShown: false}} />
        <Stack.Screen name='ConfirmScreen' component={ConfirmScreen} options={{ headerShown: false}} />
        <Stack.Screen name='TransferSucess' component={TransferSucess} options={{ headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
