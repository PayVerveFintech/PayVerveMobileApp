
import { NavigationContainer } from '@react-navigation/native';
import { AppContextProvider } from './src/context/AppContextProvider';
import { HomePage } from './src/navigation/HomeNavigation';

export default function App() {

    return (

        <NavigationContainer>
            <AppContextProvider>
                <HomePage />
            </AppContextProvider>
        </NavigationContainer>
    )
}