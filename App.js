import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "./src/navigation/HomeNavigation";
import PayBillsScreen from "./src/screens/PayBillsScreen";

export default function App() {
  return (
    <NavigationContainer>
      <HomePage />
    </NavigationContainer>

  );
}