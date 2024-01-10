import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../styles/styles" 


const TransactionDetail = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                     style={{                        
                        paddingTop: 60,
                        paddingLeft: 5
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image source={require('../../assets/backVector.png')} />
                </TouchableOpacity>
                <Text style={styles.header_Text_1}>
                    Transaction Details
                </Text>
            </View>
            
            {/* Error.. The date and time needs to be edited to the time and dates the transaction took place. */}
            <Text style={styles.header_Text_2}>
                Generated from PayVerve on 11/12/2023 20:40:53.
            </Text>

            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Transaction Amount</Text>
                <Text>#20,000</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Transfer Fee</Text>
                <Text>#10.</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Sender's Name</Text>
                <Text>Blessing Onwunali</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Transaction Type</Text>
                <Text>Inter Bank</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Account Number</Text>
                <Text>09089098..</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Receipent</Text>
                <Text>Victor Victor</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Bank Name</Text>
                <Text>Access Bank</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Date and Time</Text>
                <Text>12/12/2023 12:22:44</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Narration</Text>
                <Text>#..</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Reference</Text>
                <Text>2395346748634895967</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold', fontSize: 25}}>Transfer Status</Text>
                <Text>Successful</Text>
            </View>

            
            <View style={{flexDirection: 'row', marginTop: 30, paddingLeft: 20}}>
                <Image
                    source={require('../../assets/customer_service.png')}
                />
                <Text>Get Help</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 15, paddingLeft: 20}}>
                <Image
                    source={require('../../assets/share_icon.png')}
                />
                <Text>Share Receipt</Text>
            </View>
        </View>
    )
}

export default TransactionDetail;