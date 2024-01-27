import { View, Pressable, Text, FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Ionicons } from '@expo/vector-icons';
import Beneficiaries from "../../components/Beneficiaries";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import { useInfo } from "../../context/userInfo";
import Header from "../../components/HeaderComponent";




const ManageBeneficiaries = () => {
    const navigation = useNavigation()

    //import beneficiary from context
    const { beneficiaries, setBeneficiaries } = useInfo() 

    //navigate to add beneficiary
    const addBeneficiary = () => {
        navigation.navigate("Add Beneficiaries")
    }

    const removeBeneficiary = (index) => {
        // Create a copy of the beneficiaries array
        const updatedBeneficiaries = [...beneficiaries];
    
        // Remove the item at the specified index
        updatedBeneficiaries.splice(index, 1);
    
        // Update the state with the modified array
        setBeneficiaries(updatedBeneficiaries);

    };


    //render item
    const renderItem = ({ item, index }) => (
        <Beneficiaries 
            bankName={item.bankName} 
            accountName={item.accountName} 
            accountNumber={item.accountNumber} 
            onPress={()=>{removeBeneficiary(index)}}
        />
    )

  return (
    <SafeAreaView style={styles.container}>
        <Header title="Manage Beneficiaries" />
        <View style={styles.benficiariesList}>
            {beneficiaries?.length > 0 
                ?
                    <FlatList
                        data={beneficiaries}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => renderItem({ item, index })}
                        scrollEnabled={true}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={()=>(<View style={{height: 14}}></View>)}
                    />
                        

                :   <View style={styles.emptyView}>
                        <Text style={styles.noBeneficiary}>Add Beneficiaries</Text>
                    </View>
            }


            <Pressable
                style={styles.addWalletButton}
                onPress={addBeneficiary}
            >
                <Ionicons name="add-outline" size={34} color="black" />
            </Pressable>
        </View>
    </SafeAreaView>
  )
}

export default ManageBeneficiaries