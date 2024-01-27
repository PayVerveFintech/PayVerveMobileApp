import { TouchableOpacity, Image, View } from "react-native"
import { styles } from "./styles"
import nineMobile from "../../../assets/9mobile-logo.png"
import airtel from "../../../assets/airtel-logo.png"
import mtn from "../../../assets/mtn-logo.png"
import glo from "../../../assets/glo-logo.png"

export const MobileNetworks = () => {
    return (
        <View style={styles.network_flex_row}>

            <TouchableOpacity 
                style={styles.network_container}
            >
                <Image source={nineMobile} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.network_container}
            >
                <Image source={airtel} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.network_container}
            >
                <Image source={mtn} />
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.network_container}
            >
                <Image source={glo} />
            </TouchableOpacity>
        </View>
    )
}