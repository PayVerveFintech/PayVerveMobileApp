import { createStackNavigator } from "@react-navigation/stack"
import { BottomNav } from "./BottomNavigation"
import { styles } from "../styles/styles"
import { SuccessfulScreen } from "../screens/SuccessfulScreen"
import { ReviewScreen } from "../screens/ReviewScreen"
import { BackButton } from "../components/ButtonComponent/BackButton"
import AddMoneyScreen from "../screens/AddMoneyScreen"
// import { BillsNav } from "./StackNavigation"
import CableTvScreen from "../screens/CableTvScreen"
import ElectricityScreen from "../screens/ElectricityScreen"
import TransportationScreen from "../screens/TransportationScreen"
import BettingScreen from "../screens/BettingScreen"


const Stack = createStackNavigator()

export const HomePage = () => {

    const headerOptions = {
        headerStyle: {
            height: 100
        },
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "center",
        headerLeft: () => (<BackButton />),
        headerBackTitleVisible: true,
    }

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
                options={headerOptions}
            />

            <Stack.Screen 
                name="Add Money" 
                component={AddMoneyScreen} 
                options={headerOptions}
            />

            {/* <Stack.Screen 
                name="Pay Bills" 
                component={BillsNav} 
                options={headerOptions}
            /> */}

            <Stack.Screen 
                name="Cable TV" 
                component={CableTvScreen} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Electricity" 
                component={ElectricityScreen} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Transportation" 
                component={TransportationScreen} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Betting" 
                component={BettingScreen} 
                options={headerOptions}
            />
        </Stack.Navigator>
    )

}