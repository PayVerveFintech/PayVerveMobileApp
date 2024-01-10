import { View, TouchableOpacity, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { BillsType } from "../../components/BillsTypeComponent/BillsType"
import { styles } from "../../styles/styles"
import { bills } from "../../service/bills"
import { useNavigation } from "@react-navigation/native"

const PayBillsScreen = () => {
    const navigation = useNavigation()

    //render bill component
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                <BillsType billName={item.name} billImage={item.image}/>
            </TouchableOpacity>
        )
    }



    return (
        <SafeAreaView style={styles.container}>
            <View>
                <FlatList
                    data= {bills}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View style={{height: 12}} />}
                />
            </View>
        </SafeAreaView>
    )
}

export default PayBillsScreen