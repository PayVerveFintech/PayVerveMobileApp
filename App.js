import * as React from 'react'
// import { AuthProvider } from "./src/hooks/userAuth";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SignUp1 from "./src/screens/SignUp1";
import Login from './src/screens/Login';
// import HomeNav from "./src/navigation/HomeNav";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmailConfirmation from './src/screens/EmailConfirmation';

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
            </Stack.Navigator>
        </NavigationContainer>
    
    // <OnboardingScreen />
    // <AuthProvider>
    //   <OnboardingScreen />
    // </AuthProvider>
  );
}

export default App;