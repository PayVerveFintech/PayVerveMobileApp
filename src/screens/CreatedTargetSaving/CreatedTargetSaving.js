import { Image, View } from "react-native"
import { styles } from "../../styles/styles";
import Styles from "./styles";
import { ScrollView } from "react-native";

const CreatedTargetSaving = () => {
    return(
        <View style={Styles.container}>
            <View style={{flexDirection: 'row'}}>

                {/* header back navigation button */}
                <TouchableOpacity
                    style={Styles.headerTouchableOpacity}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={require('../../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text 
                    style={styles.header_Text_1}
                >
                    Target Savings
                </Text>
            </View>

            {/* The scrollView body */}
            <ScrollView>
                <View style={Styles.scrollViewStyles}>
                    <Text>Rent</Text>
                    <Text># 10,000</Text>
                    <Text>Interest Rate</Text>
                    <Text>10% p.a</Text>

                    <View style={Styles.scrollViewStyles_row}>
                        <View style={Styles.scrollViewStyles_col}>
                            <Text>Duration</Text>
                            <Text>10 Months</Text>
                        </View>
                        <View style={Styles.scrollViewStyles_col}>
                            <Text>Maturity Date</Text>
                            <Text>18/06/24</Text>
                        </View>
                    </View>
                </View>

                <Image 
                    source={require('../../../assets/add_icon.png')}
                    style={Styles.scrollViewStyles_img}
                />
            </ScrollView>
        </View>
    )
}
export default CreatedTargetSaving;