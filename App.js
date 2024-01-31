import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "./src/navigation/HomeNavigation";
import { Text } from "react-native";




export default function App() {
  return (
    <NavigationContainer>
      <HomePage />
    </NavigationContainer>

  );
}