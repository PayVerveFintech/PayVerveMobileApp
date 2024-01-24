import * as React from 'react'
// import { AuthProvider } from "./src/hooks/userAuth";
import OnboardingScreen from './src/screens/OnboardingScreen/OnboardingScreen'
import SignUp1 from "./src/screens/SignUp/SignUp1";
import Login from './src/screens/Login/Login';
// import HomeNav from "./src/navigation/HomeNav";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmailConfirmation from './src/screens/EmailConfirmation/EmailConfirmation';
import VerificationCode from './src/screens/VerficcationCode/VerificationCode';
import ForgetPassword from './src/screens/ForgetPassword/ForgetPassword';
import KYCVerification2 from './src/screens/KCVerication2/KYCVerification2';
import KYCVerification from './src/screens/KYCVerification/KYCVerification';
import CreateNewPW from './src/screens/CreatedNewPW/CreateNewPW';
import KYCVerification3 from './src/screens/KYCVerification3/KYCVerification3';
import Finance from './src/screens/Finance/Finance';
import TransactionDetail from './src/screens/TransactionDetails/TransactionDetails';
import SavingInsight from './src/screens/SavingInsight/SavingInsight';
import AirtimeInsight from './src/screens/AirtimeInsight/AirtimeInsight';
import DataInsight from './src/screens/DataInsight/DataInsight';
import BillsInsight from './src/screens/BillsInsight/BillsInsight';

function App() {

  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
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

                <Stack.Screen name="Home" component={OnboardingScreen} options={{ headerShown: false }} />
                
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
    
    // <OnboardingScreen />
    // <AuthProvider>
    //   <OnboardingScreen />
    // </AuthProvider>
  );
}

export default App;