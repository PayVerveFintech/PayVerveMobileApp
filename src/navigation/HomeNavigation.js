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

            <Stack.Screen 
                name="Wallet" 
                component={WalletScreen} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Add a New Wallet" 
                component={AddNewWallet} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Personal Information" 
                component={PersonalInformation} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Proof of Address" 
                component={ProofOfAddress} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Confirmation" 
                component={WalletConfirmation} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Camera" 
                component={CameraScreen} 
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen 
                name="Swap Currency" 
                component={SwapCurrencyScreen} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Exchange Chart" 
                component={ExchangeChartScreen} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Change Password" 
                component={ChangePassword} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Change Transaction Pin" 
                component={ChangeTransactionPin} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Manage Beneficiaries" 
                component={ManageBeneficiaries} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Add Beneficiaries" 
                component={AddBeneficiaries} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Refer Friends" 
                component={ReferFriends} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Referral History" 
                component={ReferralHistory} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Request POS" 
                component={RequestPOS} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Terms and Conditions" 
                component={TermsAndConditions} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Support" 
                component={SupportScreen} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Feedback" 
                component={FeedbackScreen} 
                options={headerOptions}
            />

            <Stack.Screen 
                name="Live Chat" 
                component={LiveChat} 
                options={headerOptions}
            />


        </Stack.Navigator>
    )

}