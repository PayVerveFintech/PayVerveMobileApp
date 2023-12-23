import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PayVerve from "../screens/payVerve";
import OtherBanks from "../screens/otherBanks";





const TopTab = createMaterialTopTabNavigator();

export const TopNavigation = () => {
    return(
        <TopTab.Navigator
           
        >
            <TopTab.Screen name="PayVerve" component={PayVerve} />
            <TopTab.Screen name="OtherBanks" component={OtherBanks} />
        </TopTab.Navigator>
    )
}