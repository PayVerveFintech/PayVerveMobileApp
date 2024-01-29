import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/styles";

const SavingInsight = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{                        
                        paddingTop: 60,
                        paddingLeft: 5
                    }}
                >
                    <Image 
                        source={require('../../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={
                    {
                        fontSize: 35,
                        paddingTop: 50,
                        paddingLeft: 35,
                        alignSelf: 'center',
                        fontWeight: 'bold'
                    }
                }>
                    Savings
                </Text>
            </View>
            <Text style={styles.finance_header_text_2}>
               You saved a total of 1,500,000 NGN which is 50.31% of your total funds.
            </Text>
            
            <View style={{backgroundColor: "#F9F9F9", justifyContent: 'space-between', borderRadius: 8, alignSelf: "center"}}>
                <View style={{flexDirection: 'column'}}>
                    <Text> Total Amount Saved</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}> #1,500,00</Text>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text> Total Interest Earned</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}> #150,000</Text>
                </View>
            </View>
        </View>
    )
}
export default SavingInsight;