import { NavigationContainer } from "@react-navigation/native";
import { HomePage } from "./src/navigation/HomeNavigation";
import { AppContextProvider } from "./src/context/AppContextProvider";

export default function App() {
    return (
        <AppContextProvider>
            <NavigationContainer>
                <HomePage />
            </NavigationContainer>
        </AppContextProvider>

    );
}