// import { Image, Text, TouchableOpacity, View } from "react-native"
// import { styles } from "../../styles/styles"

// const TargetSaving = ({navigation}) => {
//     return (
//         <View style={styles.container}>

//             {/* The header with a return button and header's name. */}
//             <View style={{flexDirection: 'row'}}>
//                 <TouchableOpacity
//                     style={{                        
//                         paddingTop: 60,
//                         paddingLeft: 5
//                     }}
//                     onPress={() => navigation.goBack()}
//                 >
//                     <Image 
//                         source={require('../../../assets/backVector.png')}
//                     />
//                 </TouchableOpacity>
//                 <Text 
//                     style={styles.header_Text_1}
//                 >
//                     Target Savings
//                 </Text>
//             </View>

//             {/* Target Image */}
//             <Image 
//                 source={require('../../../assets/target.png')}
//                 style={{alignSelf: 'center'}}
//             />

//             <View>
//                 <Text style={{fontWeight: 'bold'}}> Timeframe</Text>
//                 <View>
//                     <Image 
//                         source={require('../../../assests/egg_timer.png')}
//                     />
//                     <Text>
//                         This saving allows you set a specific target amount to save for a timeframe that suits you best. We auto 
//                         debit your wallet balance to credit your target saving plan based on your selected frequency. Take control of your financial 
//                         journey with precision and purpose.
//                     </Text>
//                 </View>
//             </View>

//             <View>
//                 <Text style={{fontWeight: 'bold'}}> Trust</Text>
//                 <View>
//                     <Image 
//                         source={require('../../../assests/trust_vector.png')}
//                     />
//                     <Text>
//                         Welcome to a worry free financial planning with PayVerve target saving option, you are sining-up for stability and accountability.
//                     </Text>
//                 </View>
//             </View>

//             <View>
//                 <Text style={{fontWeight: 'bold'}}> Security</Text>
//                 <View>
//                     <Image 
//                         source={require('../../../assests/security_vector.png')}
//                     />
//                     <Text>
//                         With robust security measure in place. your information is safeguard at every step.
//                     </Text>
//                 </View>
//             </View>

//             {/* you're to add a function here */}
//             <TouchableOpacity
//                 style={styles.signupButton}
//                 onPress={() => navigation.navigate('...')}
//             >
//                 <Text style={styles.touchableOpacityText}>Create</Text>
//             </TouchableOpacity>
            
//         </View>
//     )
// }
// export default TargetSaving;