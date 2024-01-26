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
import BettingScreen from "../screens/BettingScreen";
import Home from '../screens/home';
import { TouchableOpacity } from "react-native";
import PinScreen from '../screens/pinScreen';
import ConfirmScreen from '../screens/confirmScreen';
import TransferSucess from '../screens/transferSucess';
import { TopNavigation } from "./topTab"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import AirtimeScreen from "../screens/airtimeScreen"
import PayBillsScreen from "../screens/PayBillsScreen"
import DataScreen from "../screens/DataScreen"
import SavingScreen from "../screens/savingScreen"
import TargetSaving from "../screens/targetSaving"
import FixedSaving from "../screens/fixedSaving"
import SpendAndSave from "../screens/spendAndSave"
import SaveReview from "../screens/saveReview"
import TransferReview from "../screens/transferReview"
import TargetSavingPlan from "../screens/targetSavingPlan"
import FixedSavingPlan from "../screens/fixedSavingPlan"


const Stack = createStackNavigator();

const  Tab = createBottomTabNavigator();


export const HomePage = ({ nav }) => {

    const headerOptions = {
        headerStyle: {
            height: 90
        },
        headerTitleStyle: styles.headerTitleStyle,
        headerTitleAlign: "center",
        headerLeft: () => (<BackButton />),
        headerBackTitleVisible: true,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                 <Tab.Screen 
                    name="BottomNav" 
                    component={BottomNav} 
                    options={{
                        headerShown: false
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

                <Stack.Screen 
                    name="Home" 
                    component={Home} 
                    options={{headerShown: false}}
                />

                <Stack.Screen 
                    name="Transfer" 
                    component={TopNavigation} 
                    options={headerOptions}
                />

                <Stack.Screen 
                    name='TransferReview' 
                    component={TransferReview} 
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen 
                    name='PinScreen' 
                    component={PinScreen} 
                    options={{ headerShown: false}} 
                />

                <Stack.Screen 
                    name='ConfirmScreen' 
                    component={ConfirmScreen} 
                    options={{ headerShown: false}} 
                />

                <Stack.Screen 
                    name='TransferSucess' 
                    component={TransferSucess} 
                    options={{ headerShown:false}} 
                />

                <Stack.Screen
                    name="AirtimeScreen"
                    component={AirtimeScreen}
                    options={{
                        headerShown: false
                    }} 
                />

                <Stack.Screen
                    name="BettingScreen"
                    component={BettingScreen} 
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="PayBillsScreen"
                    component={PayBillsScreen}
                    options={headerOptions}
                />

                <Stack.Screen
                    name="DataScreen"
                    component={DataScreen}
                    options={headerOptions}
                />

                <Stack.Screen
                    name="AddMoneyScreen"
                    component={AddMoneyScreen}
                    options={headerOptions}
                />

                <Stack.Screen
                    name="SavingScreen"
                    component={SavingScreen} 
                    options={{
                        headerShown:  false
                    }}
                />

                <Stack.Screen
                    name="TargetSaving"
                    component={TargetSaving}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="FixedSaving"
                    component={FixedSaving}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="SpendAndSave"
                    component={SpendAndSave}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="SaveReview"
                    component={SaveReview}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="TargetSavingPlan"
                    component={TargetSavingPlan}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen
                    name="FixedSavingPlan"
                    component={FixedSavingPlan}
                    options={{
                        headerShown: false
                    }}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )

}