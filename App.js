import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "./src/navigation/HomeNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <HomePage />
    </NavigationContainer>

  );
}