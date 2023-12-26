
import { AuthProvider } from "./src/hooks/userAuth";
import OnboardingScreen from "./src/screens/OnboardingScreen";
import SignUp from "./src/screens/SignUp";

export default function App() {
  return (
    
    <AuthProvider>
      <OnboardingScreen />
    </AuthProvider>
  );
}