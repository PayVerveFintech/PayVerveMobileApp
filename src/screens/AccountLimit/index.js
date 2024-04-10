import { View, Image, Text, ScrollView } from "react-native";
import styless from "./style";
import { styles } from "../../styles/styles";

const AccountLimit = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity
                    style={styles.backVector}
                    onPress={() => navigation.goBack()}
                >
                    <Image 
                        source={require('../../../assets/backVector.png')}
                    />
                </TouchableOpacity>
                <Text style={styles.header_Text_1}> Account Limit </Text>
            </View>

            <ScrollView style = {styless.body}>
            
            <View style = {styless.transferHistory}>
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

            <View style = {styless.transferHistory}>
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

            <View style = {styless.transferHistory}>
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

            <View style = {styless.transferHistory}>
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