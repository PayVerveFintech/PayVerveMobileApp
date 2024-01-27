import { useState } from "react"
import { View, FlatList, Text,  } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import Header from "../../components/HeaderComponent"



const ReferralHistory = () => {
    const [referralHistory, setReferralHistory] = useState(true)
    const [referral, setReferral] = useState(["Benita Ajagunna", "Adekunle Ajasin"])

    const renderItem = ({item, index}) => (
        <View style={styles.referralHistoryWrapper}>
            <Text style={styles.referralHistoryHeader}>Congratulation</Text>
            <Text style={styles.referralHistoryBody}>You've received 500 points from {referral[index]}'s active use of PayVerve</Text>
        </View>
    )


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Referral History" />
            
            {referralHistory 
                    ?   <FlatList 
                            data={referral}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderItem}
                            scrollEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            ItemSeparatorComponent={()=>(<View style={{height: 19}}></View>)}
                           
                        />
                    
                :   <View style={styles.emptyHistory}>
                        <View style={styles.emptyHistoryWrapper}>
                            <Text style={styles.emptyHistoryHeader}>No history has been made</Text>
                            <Text style={styles.emptyHistoryBody}>
                                Create a referral history simply by Referring PayVerve to friends and 
                                family and begin a journey of point accumulation
                            </Text>
                        </View>
                    </View>
            }
            
        </SafeAreaView>
    )
}

export default ReferralHistory