import { createStackNavigator } from "@react-navigation/stack"
import { BottomNav } from "./BottomNavigation"
import { SuccessfulScreen } from "../screens/SuccessfulScreen"
import { ReviewScreen } from "../screens/ReviewScreen"
import { BackButton } from "../components/ButtonComponent/BackButton"
import AddMoneyScreen from "../screens/AddMoneyScreen"
import CableTvScreen from "../screens/CableTvScreen"
import ElectricityScreen from "../screens/ElectricityScreen"
import TransportationScreen from "../screens/TransportationScreen"
import BettingScreen from "../screens/BettingScreen"
import AddNewWallet from "../screens/AddNewWallet"
import PersonalInformation from "../screens/PersonalInformation"
import ProofOfAddress from "../screens/ProofOfAddress"
import WalletConfirmation from "../screens/WalletConfirmation"
import CameraScreen from "../screens/CameraView"
import WalletScreen from "../screens/WalletScreen"
import SwapCurrencyScreen from "../screens/SwapCurrencyScreen"
import ExchangeChartScreen from "../screens/ExchangeChartScreen"
import ChangePassword from "../screens/ChangePassword"
import ChangeTransactionPin from "../screens/ChangeTransactionPin"
import ManageBeneficiaries from "../screens/ManageBeneficiaries"
import AddBeneficiaries from "../screens/AddBeneficiaries"
import ReferFriends from "../screens/ReferFriends"
import ReferralHistory from "../screens/ReferralHistory"
import RequestPOS from "../screens/RequestPOS"
import TermsAndConditions from "../screens/TermsAndConditions"
import SupportScreen from "../screens/SupportScreen"
import FeedbackScreen from "../screens/FeedbackScreen"
import LiveChat from "../screens/LiveChat"
import PayBillsScreen from "../screens/PayBillsScreen"
import NotificationScreen from "../screens/NotificationScreen"
import BankStatement from "../screens/BankStatement"
import PasswordScreen from "../screens/PasswordScreen"
import Profile from "../screens/ProfileScreen"
import OnboardingScreen from "../screens/OnboardingScreen/OnboardingScreen"
import SignUp1 from "../screens/SignUp/SignUp1";
import Login from "../screens/Login/Login";
import EmailConfirmation from "../screens/EmailConfirmation/EmailConfirmation";
import VerificationCode from "../screens/VerficcationCode/VerificationCode";
import ForgetPassword from "../screens/ForgetPassword/ForgetPassword";
import KYCVerification2 from "../screens/KYCVerication2/KYCVerification2";
import KYCVerification from "../screens/KYCVerification/KYCVerification";
import CreateNewPW from "../screens/CreatedNewPW/CreateNewPW";
import KYCVerification3 from "../screens/KYCVerification3/KYCVerification3";
import Finance from "../screens/Finance/Finance";
import TransactionDetail from "../screens/TransactionDetails/TransactionDetails";
import SavingInsight from "../screens/SavingInsight/SavingInsight";
import AirtimeInsight from "../screens/AirtimeInsight/AirtimeInsight";
import DataInsight from "../screens/DataInsight/DataInsight";
import BillsInsight from "../screens/BillsInsight/BillsInsight";
import Home from "../screens/home";
import { HomeNav } from "./StackNavigation"
import TargetSavingPlan from "../screens/targetSavingPlan"
import TargetSaving from "../screens/TargetSaving/TargetSaving"
import NewTargetSaving from "../screens/newTargetSaving"
import SaveReview from "../screens/saveReview"
import ConfirmScreen from "../screens/confirmScreen"
import TransferSucess from "../screens/transferSucess"
import { TopNavigation } from "./topTab"
import TransferReview from "../screens/transferReview"
import DataScreen from "../screens/DataScreen"
import Airtime from "../screens/airtime"
import FixedSavingPlan from "../screens/fixedSavingPlan"
import FixedSaving from "../screens/fixedSaving"


const Stack = createStackNavigator()

export const HomePage = () => {

   
    const headerOptions = {
        headerStyle: {
            height: 90
        },
        headerTitleAlign: "center",
        headerLeft: () => (<BackButton />),
        headerBackTitleVisible: true,
    }

    return (
        <Stack.Navigator initialRouteName="Onboarding">
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
                name="SignUp" 
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
    
            <Stack.Screen 
                name="Notification" 
                component={NotificationScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Success"
                component={SuccessfulScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Review" 
                component={ReviewScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Add Money" 
                component={AddMoneyScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Pay Bills" 
                component={PayBillsScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Cable TV" 
                component={CableTvScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Electricity" 
                component={ElectricityScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Transportation" 
                component={TransportationScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Betting" 
                component={BettingScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Wallet" 
                component={WalletScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Add a New Wallet" 
                component={AddNewWallet} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Personal Information" 
                component={PersonalInformation} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Proof of Address" 
                component={ProofOfAddress} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Confirmation" 
                component={WalletConfirmation} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Camera" 
                component={CameraScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Swap Currency" 
                component={SwapCurrencyScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Exchange Chart" 
                component={ExchangeChartScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Change Password" 
                component={ChangePassword} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Change Transaction Pin" 
                component={ChangeTransactionPin} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Manage Beneficiaries" 
                component={ManageBeneficiaries} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Add Beneficiaries" 
                component={AddBeneficiaries} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Refer Friends" 
                component={ReferFriends} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Referral History" 
                component={ReferralHistory} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Request POS" 
                component={RequestPOS} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Terms and Conditions" 
                component={TermsAndConditions} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Support" 
                component={SupportScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Feedback" 
                component={FeedbackScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Live Chat" 
                component={LiveChat} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Bank Statement"
                component={BankStatement}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Password"
                component={PasswordScreen}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />
            
            <Stack.Screen
                name="AppHome"
                component={BottomNav}
                options={{headerShown:false}}
            />

            <Stack.Screen
                name="TargetSavingPlan"
                component={TargetSavingPlan}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="NewTargetSaving"
                component={NewTargetSaving}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="SaveReview"
                component={SaveReview}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="ConfirmScreen"
                component={ConfirmScreen}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="TransferSucess"
                component={TransferSucess}
                options={{ headerShown: false}}
            />

            <Stack.Screen 
                name="Transfer" 
                component={TopNavigation} 
                options={headerOptions}
            />

            <Stack.Screen
                name="TransferReview"
                component={TransferReview}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Data"
                component={DataScreen}
                options={{ headerShown: false}}
            />
            
            <Stack.Screen
                name="Airtime"
                component={Airtime}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="ReferFriend"
                component={ReferFriends}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="PayBillsScreen"
                component={PayBillsScreen}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="SwapCurrencyScreen"
                component={SwapCurrencyScreen}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="WalletScreen"
                component={WalletScreen}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="FixedSavingPlan"
                component={FixedSavingPlan}
                options={{ headerShown: false}}
            />

            <Stack.Screen
                name="FixedSaving"
                component={FixedSaving}
                options={{ headerShown: false}}
            />

            
        </Stack.Navigator>
    )

}