import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator()

export const BottomNav = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Finance" component={FinanceScreen} />
            <Tab.Screen name="Save" component={SaveScreen} />
            <Tab.Screen name="More" component={MoreScreen} />
        </Tab.Navigator>
    )
}