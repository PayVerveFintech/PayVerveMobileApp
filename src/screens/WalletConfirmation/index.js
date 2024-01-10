import { View, Image, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import like from "../../../assets/like.png"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"
import { PersonalInfoProgress } from "../../components/PersonalInfoProgress"


const Confirmation = () => {
    const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <PersonalInfoProgress screen="confirm" />

            <View style={styles.confirmationBody}>
                <Image source={like} />
                <Text style={styles.confirmationText}>You've successfully created your {"Dollar"} Account. Do more with PayVerve.</Text>
            </View>

            <Button btn_text="Back Home" onPress={() => { navigation.navigate("Finance")}} />
        </View>
    </SafeAreaView>
  )
}

export default Confirmation