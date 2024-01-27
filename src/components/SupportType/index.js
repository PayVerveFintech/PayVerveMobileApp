import { TouchableOpacity, Text } from "react-native"
import { styles } from "./styles"


const SupportType = ({ icon, title, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.supportType}
            onPress={onPress}
        >
            {icon}
            <Text style={styles.supportDesc}>{title}</Text>
        </TouchableOpacity>
    )
}

export default SupportType