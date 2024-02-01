import { View, Image, Text, ScrollView } from "react-native";
import styles from "./style";
import { styles } from "../../styles/styles";

const AccountLimit = ({navigation}) => {
    return (
        <View>
            <View>
                <TouchableOpacity
                    style={styles.backVector}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={require('../../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.headerText}> Account Limit </Text>
            </View>

            <ScrollView style = {styles.body}>
            
            <View style = {styles.transferHistory}>
                <Text>PayVerve to PayVerve</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit per Transaction</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
            </View>

            <View style = {styles.transferHistory}>
                <Text>PayVerve to Other Bank</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit per Transaction</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
            </View>

            <View style = {styles.transferHistory}>
                <Text>PayVerve to Dollar Account</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit per Transaction</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
            </View>

            <View style = {styles.transferHistory}>
                <Text>PayVerve to Pounds Account</Text>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit per Transaction</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Text>Daily Transfer Limit</Text>
                    <Text style={{alignSelf: 'flex-end'}}>#10,000,000.00</Text>
                </View>
            </View>
        </ScrollView>
        </View>
        
    )
}

export default AccountLimit;