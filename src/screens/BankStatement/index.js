import { styles } from '../../styles/styles';

const { View, TextInput } = require('react-native')

const BankStatement = ({navigation}) => {
    return(
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
                <Text style={styles.headerText}> Bank Statement </Text>
            </View>

            <View>
                <Text>Start Date</Text>
                <TextInput
                    placeholder='Text'
                    value=''
                    onChangeText={""}
                />
            </View>

            <View>
                <Text>End Date</Text>
                <TextInput
                    placeholder='Text'
                    value=''
                    onChangeText={""}
                />
            </View>

            <View>
                <Text>Email Address</Text>
                <TextInput
                    placeholder='Text'
                    value=''
                    onChangeText={""}
                />
            </View>

            {/* generate function */}
            <TouchableOpacity
                    style={styles.signupButton} 
                    onPress={}
                >
                    <Text style={styles.touchableOpacityText}>
                        Generate
                    </Text>
                </TouchableOpacity>

        </View>
    )
}

export default BankStatement;