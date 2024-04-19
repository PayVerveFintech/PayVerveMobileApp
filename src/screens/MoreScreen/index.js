import { View, FlatList, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import SupportType from "../../components/SupportType"
import { moreTools } from "../../service/moreTools"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/HeaderComponent"

export const MoreScreen = () => {
    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <SupportType 
            icon={<Image source={item.image} style={styles.moreIcon} />} 
            title={item.name}
            onPress={()=>{navigation.navigate(item?.screen)}}
        />
    )
    

    return (
        <SafeAreaView style={styles.container}>
            <Header title="More" />
            
            <View style={styles.moreWrapper}>
                <FlatList 
                    data={moreTools}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                />
                
            </View>
        </SafeAreaView>
    )
}