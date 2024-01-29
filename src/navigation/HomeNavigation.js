import { createStackNavigator } from "@react-navigation/stack"
import BottomNav from "../navigation/BottomNavigation"
import { styles } from "../styles/styles"
import  SuccessfulScreen from "../screens/SuccessfulScreen"
import  ReviewScreen  from "../screens/ReviewScreen"
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



import OnboardingScreen from '../screens/OnboardingScreen/OnboardingScreen'
import SignUp1 from "../screens/SignUp/SignUp1";
import Login from '../screens/Login/Login';
import EmailConfirmation from '../screens/EmailConfirmation/EmailConfirmation';
import VerificationCode from '../screens/VerficcationCode/VerificationCode';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import KYCVerification2 from '../screens/KCVerication2/KYCVerification2';
import KYCVerification from '../screens/KYCVerification/KYCVerification';
import CreateNewPW from '../screens/CreatedNewPW/CreateNewPW';
import KYCVerification3 from '../screens/KYCVerification3/KYCVerification3';
import Finance from '../screens/Finance/Finance';
import TransactionDetail from '../screens/TransactionDetails/TransactionDetails';
import SavingInsight from '../screens/SavingInsight/SavingInsight';
import AirtimeInsight from '../screens/AirtimeInsight/AirtimeInsight';
import DataInsight from '../screens/DataInsight/DataInsight';
import BillsInsight from '../screens/BillsInsight/BillsInsight';

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


    const mainApp = () => {
        return(
            <Stack.Navigator>


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
            </Stack.Navigator>
        )
    }


    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="OnboardingScreen"
            >
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

                {/* <Stack.Screen 
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
                /> */}

                <Stack.Screen
                    name="mainApp"
                    component={mainApp}
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

                <Stack.Screen 
                    name="Onboarding" 
                    component={OnboardingScreen} 
                    options={
                        { 
                            headerShown: false 
                        }
                    } 
                />

                <Stack.Screen 
                    name="OnboardingScreen" 
                    component={OnboardingScreen} 
                    options={
                        { 
                            headerShown: false 
                        }
                    } 
                />
                
                <Stack.Screen 
                    name="SignUp1" 
                    component={SignUp1} 
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
                <Stack.Screen 
                    name="Login" 
                    component={Login} 
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen
                    name="EmailConfirmation"
                    component={EmailConfirmation}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen
                    name="VerificationCode"
                    component={VerificationCode}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='CreateNewPW'
                    component={CreateNewPW}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='ForgetPassword'
                    component={ForgetPassword}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='KYCVerify'
                    component={KYCVerification}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='KYCVerify2'
                    component={KYCVerification2}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='KYCVerify3'
                    component={KYCVerification3}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='Finance'
                    component={Finance}
                    options={
                            {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='TransactDetails'
                    component={TransactionDetail}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='SavingInsight'
                    component={SavingInsight}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='AirtimeInsight'
                    component={AirtimeInsight}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='DataInsight'
                    component={DataInsight}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />

                <Stack.Screen 
                    name='BillsInsight'
                    component={BillsInsight}
                    options={
                        {
                            headerShown: false
                        }
                    }
                />
                
            </Stack.Navigator>
        </NavigationContainer>
    )

}