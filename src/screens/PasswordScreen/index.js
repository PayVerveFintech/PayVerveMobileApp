import { View, FlatList, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import SupportType from "../../components/SupportType"
import { passwordItem } from "../../service/password"
import { useNavigation } from "@react-navigation/native"
import Header from "../../components/HeaderComponent"


const PasswordScreen = () => {
    const navigation = useNavigation()

    const renderItem = ({ item }) => (
        <SupportType 
            icon={<Image source={item.image} style={styles.passwordIcon} />} 
            title={item.name}
            onPress={()=>{navigation.navigate(item.screen)}}
        />
    )
    

    return (
        <SafeAreaView style={styles.container}>
            <Header title="Password" />
            
            <View style={styles.passwordWrapper}>
                <FlatList 
                    data={passwordItem}
                    renderItem={renderItem}
                    // ItemSeparatorComponent={() => <View style={styles.itemSeparator} />}
                />
                
            </View>
        </SafeAreaView>
    )
}

export default PasswordScreen