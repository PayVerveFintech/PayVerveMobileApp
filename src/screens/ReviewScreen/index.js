import { View, Text } from "react-native"
import { styles } from "./styles"
import { Review } from "../../components/ReviewContainer/Review"
import { Button } from "../../components/ButtonComponent/Button"
import { useNavigation, useRoute } from "@react-navigation/native"
import SwapReview from "../../components/ReviewContainer/SwapReview"
import { useEffect, useState } from "react"
import Header from "../../components/HeaderComponent"

export const ReviewScreen = () => {

    const navigation = useNavigation()
    const route = useRoute()

    const [isSwapReview, setSwapReview] = useState(false)
    const [isDataReview, setDataReview] = useState(false)

    useEffect(()=>{
        if (route.params?.details === "swapCurrency") {
            setSwapReview(true)
        } else if (route.params?.details === "dataReview") {
            setDataReview(true)
        }

    }, [route.params?.details])

    // console.log("screen: ", route.params.details)

    const whenPress = () => {
        let details = "";
        if (isSwapReview) {
            details = "swapCurrency";
        } else if (isDataReview) {
            details = "dataReview";
        } else {
            details = ""
        }
        navigation.navigate("Success", { details });
    }

    return (
        <View style={styles.container}>
            <Header title="Review" />

            {isSwapReview ? <SwapReview /> : <Review />}

            <Button 
                btn_text={isSwapReview ? "Proceed" : "Pay"} 
                onPress={whenPress} 
            />
        </View>
    )
}