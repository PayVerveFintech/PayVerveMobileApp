

import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './src/context/AppContextProvider';
import { HomePage } from './src/navigation/HomeNavigation';
// import { createStackNavigator } from '@react-navigation/stack';
// import EmailConfirmation from './src/screens/EmailConfirmation/EmailConfirmation';
// import VerificationCode from './src/screens/VerficcationCode/VerificationCode';
// import ForgetPassword from './src/screens/ForgetPassword/ForgetPassword';
// import KYCVerification2 from './src/screens/KCVerication2/KYCVerification2';
// import KYCVerification from './src/screens/KYCVerification/KYCVerification';
// import CreateNewPW from './src/screens/CreatedNewPW/CreateNewPW';
// import KYCVerification3 from './src/screens/KYCVerification3/KYCVerification3';
// import Finance from './src/screens/Finance/Finance';
// import TransactionDetail from './src/screens/TransactionDetails/TransactionDetails';
// import SavingInsight from './src/screens/SavingInsight/SavingInsight';
// import AirtimeInsight from './src/screens/AirtimeInsight/AirtimeInsight';
// import DataInsight from './src/screens/DataInsight/DataInsight';
// import BillsInsight from './src/screens/BillsInsight/BillsInsight';

export default function App() {

    //   const Stack = createStackNavigator();

    return (

        <NavigationContainer>
            <AppContextProvider>
                <HomePage />
            </AppContextProvider>
        </NavigationContainer>
    )
}