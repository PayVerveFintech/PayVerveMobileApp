import { View, FlatList} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import SupportType from "../../components/SupportType"
import { Support } from "../../service/support"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/HeaderComponent"


const SupportScreen = () => {
    const navigation = useNavigation()
    const support = Support(navigation)

    const renderItem = ({ item }) => (
        <SupportType 
            icon={item.image} 
            title={item.title}
            onPress={item.onPress}
        />
    )
    

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Support" />
            
            <View style={styles.supportWrapper}>
                <FlatList 
                    data={support}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                />
                
            </View>
        </SafeAreaView>
    )
}

export default SupportScreen