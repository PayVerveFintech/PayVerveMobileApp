import { createStackNavigator } from "@react-navigation/stack";
import DataScreen from "../screens/DataScreen";
import { BackButton } from "../components/ButtonComponent/BackButton";

const Stack = createStackNavigator()

//Stack navigation for the home screen
export const HomeNav = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen 
                name="Data" 
                component={DataScreen} 
                options={{
                    headerStyle: {
                        height: 150
                    },
                    headerTitleStyle: {
                        fontSize: 36
                    },
                    headerTitleAlign: "center",
                    headerLeft: () => (<BackButton />),
                    headerBackTitleVisible: true,
                }}
            />

            <Stack.Screen 
                name="Airtime" 
                component={DataScreen} 
                options={{
                    headerStyle: {
                        height: 150
                    },
                    headerTitleStyle: {
                        fontSize: 36
                    },
                    headerTitleAlign: "center",
                    headerLeft: () => (<BackButton />),
                    headerBackTitleVisible: true,
                }}
            />

        </Stack.Navigator>
    )
}



