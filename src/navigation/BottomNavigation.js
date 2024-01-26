import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeNav } from "./StackNavigation";
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FinanceScreen } from "../screens/FinanceScreen";
import SaveScreen from "../screens/SaveScreen";
import { MoreScreen } from "../screens/MoreScreen";
import Home from "../screens/home";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator()

export const BottomNav = () => {

    return (
            <Tab.Navigator
                screenOptions={{
                    tabBarHideOnKeyboard: true
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Home} 
                    options={{
                        headerShown: false,
                        tabBarLabel: "Home",
                        tabBarActiveTintColor: "#2196F3",
                        tabBarInactiveTintColor: "#949191",
                        tabBarLabelStyle: {
                            fontSize: 16
                        },
                        tabBarIcon: (tabInfo) => (
                            <Octicons 
                                name="home" 
                                size={20} 
                                color={tabInfo.focused ? "#2196F3" : "#949191"} 
                            />
                        )
                    }}
                />

                <Tab.Screen 
                    name="Finance" 
                    component={FinanceScreen}
                    options={{
                        headerShown: false,
                        tabBarLabel: "Finance",
                        tabBarActiveTintColor: "#2196F3",
                        tabBarInactiveTintColor: "#949191",
                        tabBarLabelStyle: {
                            fontSize: 16
                        },
                        tabBarIcon: (tabInfo) => (
                            <MaterialCommunityIcons 
                                name="finance" 
                                size={20} 
                                color={tabInfo.focused ? "#2196F3" : "#949191"} 
                            />
                        )
                    }}
                />

                <Tab.Screen 
                    name="Save" 
                    component={SaveScreen} 
                    options={{
                        headerShown: false,
                        tabBarLabel: "Save",
                        tabBarActiveTintColor: "#2196F3",
                        tabBarInactiveTintColor: "#949191",
                        tabBarLabelStyle: {
                            fontSize: 16
                        },
                        tabBarIcon: (tabInfo) => (
                            <MaterialCommunityIcons 
                                name="piggy-bank-outline" 
                                size={20} 
                                color={tabInfo.focused ? "#2196F3" : "#949191"} 
                            />
                        )
                    }}
                />

                <Tab.Screen 
                    name="More" 
                    component={MoreScreen} 
                    options={{
                        headerShown: false,
                        tabBarLabel: "More",
                        tabBarActiveTintColor: "#2196F3",
                        tabBarInactiveTintColor: "#949191",
                        tabBarLabelStyle: {
                            fontSize: 16
                        },
                        tabBarIcon: (tabInfo) => (
                            <Feather 
                                name="more-horizontal" 
                                size={20} 
                                color={tabInfo.focused ? "#2196F3" : "#949191"} 
                            />
                        )
                    }}
                />
            </Tab.Navigator>
    )
}