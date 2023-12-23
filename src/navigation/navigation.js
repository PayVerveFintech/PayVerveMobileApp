import React from 'react';
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TopNavigation } from "./topTab";
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/home";
import { TouchableOpacity } from "react-native";









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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
