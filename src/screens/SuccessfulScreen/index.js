import { View, Image, Text } from "react-native"
import { styles } from "./styles"
import successful from "../../../assets/successful.png"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation, useRoute } from "@react-navigation/native"
import { useState, useEffect } from "react"


export const SuccessfulScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()

    const [isSwapReview, setSwapReview] = useState(false)
    const [isDataReview, setDataReview] = useState(false)

    useEffect(()=>{
        if (route.params.details === "swapCurrency") {
            setSwapReview(true)
        } else if (route.params.details === "dataReview") {
            setDataReview(true)
        }

    }, [route.params.details])

    const whenPress = () => {
        navigation.navigate("Data")
    }

    return (
        <View style={styles.container}>
            <View style={styles.successful_screen_wrapper}>
                <Image source={successful} />
                {isSwapReview 
                    ?   <Text style={styles.successful_screen_text}>Congratulations you've successfully exchanged your money.</Text>
                    :   <Text style={styles.successful_screen_text}>Your transaction is successful</Text>
                }
            </View>

            <Button btn_text="Back Home" onPress={whenPress} />

        </View>
    )
}