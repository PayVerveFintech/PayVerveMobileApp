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
                >
                    <Image 
                        source={require('../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.header_Text_1}> Data </Text>
            </View>
            <Text> You spent a total of 1,500,00 NGN on bills which is 50.31% of your total funds.</Text>


            {/* This will be edited after once the backend server is ready */}
            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/airtel.png')} />
                    <View style={{flexDirection: 'row'}}>
                        <Text>Data Subscription</Text>
                        <Text>#5000</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Airtime - 814562586</Text>
                        <Text>Debt</Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/airtel.png')} />
                    <View style={{flexDirection: 'row'}}>
                        <Text>Data Subscription</Text>
                        <Text>#5000</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Airtime - 4562586</Text>
                        <Text>Debt</Text>
                    </View>
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={require('../../assets/airtel.png')} />
                    <View style={{flexDirection: 'row'}}>
                        <Text>Data Subscription</Text>
                        <Text>#5000</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Airtime - 33362586</Text>
                        <Text>Debt</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default DataInsight;