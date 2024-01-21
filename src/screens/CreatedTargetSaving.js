import { Image, View } from "react-native"
import { styles } from "../styles/styles"
import { ScrollView } from "react-native";

const CreatedTargetSaving = () => {
    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                    style={{                        
                        paddingTop: 60,
                        paddingLeft: 5
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={require('../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text 
                    style={styles.header_Text_1}
                >
                    Target Savings
                </Text>
            </View>

            {/* The body */}
            <ScrollView>
                <View style={{elevation: 20}}>
                    <Text>Rent</Text>
                    <Text># 10,000</Text>
                    <Text>Interest Rate</Text>
                    <Text>10% p.a</Text>

                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text>Duration</Text>
                            <Text>10 Months</Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text>Maturity Date</Text>
                            <Text>18/06/24</Text>
                        </View>
                    </View>
                </View>

                <Image 
                    source={require('../../assets/add_icon.png')}
                    style={{justifyContent: 'flex-end', marginBottom: 15}}
                />
            </ScrollView>
        </View>
    )
}
export default CreatedTargetSaving;