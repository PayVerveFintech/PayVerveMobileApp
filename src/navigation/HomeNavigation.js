import { createStackNavigator } from "@react-navigation/stack"
import { BottomNav } from "./BottomNavigation"
import { SuccessfulScreen } from "../screens/SuccessfulScreen"
import { ReviewScreen } from "../screens/ReviewScreen"
import { BackButton } from "../components/ButtonComponent/BackButton"


const Stack = createStackNavigator()

export const HomePage = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={BottomNav} 
                options={{
                    headerShown: false,
                }} 
            />

            <Stack.Screen 
                name="Success"
                component={SuccessfulScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name="Review" 
                component={ReviewScreen} 
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