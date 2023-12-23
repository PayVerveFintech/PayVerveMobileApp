import { View, Text, StyleSheet } from "react-native"
import Navigation from "./src/navigation/navigation"
import { Color } from "./src/color/Color"




export default function App() {
  return(
    <View style={styles.root}>
      <Navigation />
    </View>
  )
}


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: Color.white
  }
})