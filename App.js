import { View, Text, StyleSheet } from "react-native"
import Navigation from "./src/navigation/navigation"
import { Color } from "./src/color/Color"
import { NewUser } from "./src/context/userContext"
import { Provider } from "react-redux"



export default function App() {
  return(
    <NewUser.Provider value={true}>
      <View style={styles.root}>
      <Navigation />
    </View>
    </NewUser.Provider>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.white
  }
})