import { createStackNavigator } from "@react-navigation/stack";
import DataScreen from "../screens/DataScreen";
import { BackButton } from "../components/ButtonComponent/BackButton";
import { styles } from "../styles/styles";
// import PayBillsScreen from "../screens/PayBillsScreen";
// import CableTv from "../screens/CableTvScreen"
// import ElectricityScreen from "../screens/ElectricityScreen"
// import TransportationScreen from "../screens/TransportationScreen"

const Stack = createStackNavigator()

// const headerOptions = {
//     headerStyle: {
//         height: 100
//     },
//     headerTitleStyle: styles.headerTitleStyle,
//     headerTitleAlign: "center",
//     headerLeft: () => (<BackButton />),
//     headerBackTitleVisible: true,
// }

//Stack navigation for the home screen
export const HomeNav = () => {

    return (
        <Stack.Navigator >
            <Stack.Screen 
                name="Data" 
                component={DataScreen} 
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen 
                name="Airtime" 
                component={DataScreen} 
                options={{
                    headerShown: false
                }}
            />

        </Stack.Navigator>
    )
}

//Stack navigation for bills screen
// export const BillsNav = () => {

//     return (
//         <Stack.Navigator initialRouteName="Pay Bills">
//             <Stack.Screen 
//                 name="Pay Bills" 
//                 component={PayBillsScreen} 
//                 options={{
                    headerShown: false
                // }}
//             />

//             <Stack.Screen 
//                 name="Cable TV" 
//                 component={CableTv} 
//                 options={{
                    headerShown: false
                // }}
//             />

//             <Stack.Screen 
//                 name="Electricity" 
//                 component={ElectricityScreen} 
//                 options={{
                    headerShown: false
                // }}
//             />

//             <Stack.Screen 
//                 name="Transportation" 
//                 component={TransportationScreen} 
//                 options={{
                    headerShown: false
                // }}
//             />
//         </Stack.Navigator>
//     )
// }



