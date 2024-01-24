import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "../styles/styles"

const DataInsight = ({navigation}) => {
    return(
        <View style={styles.container}>
            <View>
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
                <Text style={
                    {
                        fontSize: 35,
                        paddingTop: 50,
                        paddingLeft: 35,
                        alignSelf: 'center',
                        fontWeight: 'bold'
                    }
                }> Data </Text>
            </View>
            <Text style={styles.finance_header_text_2}> You spent a total of 1,500,00 NGN on bills which is 50.31% of your total funds.</Text>


            {/* This will be edited after once the backend server is ready */}
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/airtel.png')} />
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Data Subscription</Text>
                        <Text>Airtime - 814562586</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <Text style={{fontWeight: 'bold'}}>#5000</Text>
                        <Text>Debt</Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/airtel.png')} />
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Data Subscription</Text>
                        <Text>Airtime - 4562586</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <Text style={{fontWeight: 'bold'}}>#5000</Text>
                        <Text>Debt</Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/airtel.png')} />
                    <View style={{flexDirection: 'column', paddingLeft: 10}}>
                        <Text style={{fontWeight: 'bold'}}>Data Subscription</Text>
                        <Text>Airtime - 33362586</Text>
                    </View>
                    <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <Text style={{fontWeight: 'bold'}}>#5000</Text>
                        <Text>Debt</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DataInsight;