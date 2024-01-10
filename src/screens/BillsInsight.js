import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../styles/styles"

const BillsInsight = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    style={{                        
                        paddingTop: 60,
                        paddingLeft: 5
                    }}
                >
                    <Image 
                        source={require('../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.header_Text_1}> Bill Pament</Text>
            </View>
            <Text> You spent a total of 1,500,00 NGN on bills which is 50.31% of your total funds.</Text>


            {/* This will be edited after once the backend server is ready */}
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/airtel.png')} />
                    <View style={{flexDirection: 'row'}}>
                        <Text>Betting</Text>
                        <Text>#5000</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Bet ID - 814562586</Text>
                        <Text>Debt</Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/electricity_icon.png')} />
                    <View style={{flexDirection: 'row'}}>
                        <Text>Electricity - Prepaid</Text>
                        <Text>#5000</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>METER - 4562586</Text>
                        <Text>Debt</Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/dstv_icon.png')} />
                    <View style={{flexDirection: 'row'}}>
                        <Text>Cable</Text>
                        <Text>#5000</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Lite - 33362586</Text>
                        <Text>Debt</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default BillsInsight;