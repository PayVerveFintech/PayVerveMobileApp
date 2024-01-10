import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native"
import { styles } from "../styles/styles";

const Finance = ({navigation}) => {
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
                    <Image 
                        source={require('../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.finance_header_text_1}> Finance</Text>
            </View>
            
            <Text style={styles.finance_header_text_2}>
                Embark on a tour exporing the stories your expenditure tell.
            </Text>

            <Image 
                style={{alignSelf: 'center', marginTop: 20}}
                source={require('../../assets/financeRate.png')} 
            />
            
            <View style={{alignSelf: 'center', marginTop: 10}}>
                <Text style={{color: '#00FF1A'}}> Total Money In                  #1,200,000</Text>
                <Text style={{color: '#FF1E1E'}}> Total Money Out             #500,000</Text>
            </View>

            <ScrollView style={{paddingLeft: 40}}>
                <View style={{flexDirection: 'column', paddingTop: 20}}>
                    <View  style={{flexDirection: 'row'}}>
                        <Image 
                            style={{alignSelf: 'center'}}
                            source={require('../../assets/cil_transfer_icon.png')}
                        />
                        <View 
                            style={{flexDirection: 'column'}}
                        >
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text 
                                    style={{fontWeight: 'bold', fontSize: 20}}
                                    onPress={() => navigation.navigate('TransactDetails')}
                                > Transfers</Text>
                                <Text style={{paddingLeft: '55%'}}> #....</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text> 70 Transfers</Text>
                                <Text style={{paddingLeft: '55%'}}> 33.00%</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'column', paddingTop: 20}}>
                    <View  style={{flexDirection: 'row'}}>
                        <Image 
                            style={{alignSelf: 'center'}}
                            source={require('../../assets/bill_payment.png')}
                        />
                        <View 
                            style={{flexDirection: 'column'}}
                        >
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text 
                                    style={{fontWeight: 'bold', fontSize: 20}}
                                    onPress={() => navigation.navigate('BillsInsight')}
                                > Bils Payment</Text>
                                <Text style={{paddingLeft: '45%'}}> #....</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text> 25 Bill Payments</Text>
                                <Text style={{paddingLeft: '47%'}}> 25.7%</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{flexDirection: 'column', paddingTop: 20}}>
                    <View  style={{flexDirection: 'row'}}>
                        <Image 
                            style={{alignSelf: 'center'}}
                            source={require('../../assets/material_symbols_light_savings_outline_rounded.png')}
                        />
                        <View 
                            style={{flexDirection: 'column'}}
                        >
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text 
                                    style={{fontWeight: 'bold', fontSize: 20}}
                                    onPress={() => navigation.navigate('SavingInsight')}
                                > Savings</Text>
                                <Text style={{paddingLeft: '55%'}}> #....</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text> Airtimes</Text>
                                <Text style={{paddingLeft: '58%'}}> 50.31%</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View 
                    style={{flexDirection: 'column', paddingTop: 20}}
                >
                    <View  style={{flexDirection: 'row'}}>
                        <Image 
                            style={{alignSelf: 'center'}}
                            source={require('../../assets/airtime_icon.png')}
                        />
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text 
                                    style={{fontWeight: 'bold', fontSize: 20}}
                                    onPress={() => navigation.navigate('AirtimeInsight')}
                                > Airtime</Text>
                                <Text style={{paddingLeft: '52%'}}> #....</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text> 50 Airtime Purchase</Text>
                                <Text style={{paddingLeft: '38%'}}> 70.31%</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View 
                    style={{flexDirection: 'column', paddingTop: 20}}
                >
                    <View  style={{flexDirection: 'row'}}>
                        <Image 
                            style={{alignSelf: 'center'}}
                            source={require('../../assets/internet_icon.png')}
                        />
                        <View style={{flexDirection: 'column'}}>
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text 
                                    style={{fontWeight: 'bold', fontSize: 20}}
                                    onPress={() => navigation.navigate('DataInsight')}
                                > Data</Text>
                                <Text style={{paddingLeft: '60%'}}> #....</Text>
                            </View>
                            <View style={{flexDirection: 'row', paddingLeft: 10}}>
                                <Text> 70 Data Subscription</Text>
                                <Text style={{paddingLeft: '40%'}}> 70.31%</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default Finance;