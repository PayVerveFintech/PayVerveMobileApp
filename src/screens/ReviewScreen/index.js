import { View, Text } from "react-native"
import { styles } from "../../styles/styles"
import { Review } from "../../components/ReviewContainer/Review"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation } from "@react-navigation/native"

export const ReviewScreen = () => {

    const navigation = useNavigation()

    const whenPress = () => {
        navigation.navigate("Success")
    }


    return (
        <View style={styles.container}>
            
            <Review />

            <Button btn_text="Pay" onPress={whenPress} />
        </View>
    )
}