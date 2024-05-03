
//import utility component that combines all the context providers
import { CombineComponents } from "../utils/CombineContext";

import { AuthProvider } from "./AuthContext";
import { InfoProvider } from "./userInfo";

const providers = [
    AuthProvider,
    InfoProvider
]

export const AppContextProvider = CombineComponents(...providers)