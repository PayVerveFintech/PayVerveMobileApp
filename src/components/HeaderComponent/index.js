import { View, Text } from "react-native"
import { BackButton } from "../ButtonComponent/BackButton"
import { styles } from "./styles"

const Header = ({ title }) => {
    return (
        <View style={styles.header}>
            <BackButton />
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header