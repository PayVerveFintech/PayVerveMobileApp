// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import OnboardingScreen from './screens/OnboardingScreen';
// import SignUp1 from '../screens/SignUp1'; 
// import Login from '../screens/Login';

// const Stack = createStackNavigator();

// const HomeNav = () => {
//     return (
//         <NavigationContainer>
//             <Stack.Navigator initialRouteName="Onboarding">
//                 <Stack.Screen 
//                     name="Onboarding" 
//                     component={OnboardingScreen} 
//                     options={
//                         { 
//                             headerShown: false 
//                         }
//                     } 
//                 />

//                 <Stack.Screen name="Home" component={OnboardingScreen} options={{ headerShown: false }} />
                
//                 <Stack.Screen 
//                     name="SignUp1" 
//                     component={SignUp1} 
//                     options={
//                         {
//                             headerShown: false
//                         }
//                     }
//                 />
//                 <Stack.Screen 
//                     name="Login" 
//                     component={Login} 
//                     options={
//                         {
//                             headerShown: false
//                         }
//                     }
//                 />
//             </Stack.Navigator>
//         </NavigationContainer>
//     )
// }

// export default HomeNav;