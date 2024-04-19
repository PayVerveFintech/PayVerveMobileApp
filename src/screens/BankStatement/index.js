import { useState } from "react"
import {styles} from "./styles"

const { View, TextInput, TouchableOpacity, Image, Text } = require('react-native')

const BankStatement = ({navigation}) => {


    const [startDate, setStartDate] =useState("");
    const [endDate, setEndDate] = useState("");
    const [email, setEmail] = useState("");

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
                <Text style={styles.header_Text_1}> Bank Statement </Text>
            </View>

            <View>
                <Text>Start Date</Text>
                <TextInput
                    placeholder='Text'
                    value={startDate}
                    onChangeText={startDate => setStartDate(startDate)}
                />
            </View>

            <View>
                <Text>End Date</Text>
                <TextInput
                    placeholder='Text'
                    value={endDate}
                    onChangeText={endDate => setEndDate(endDate)}
                />
            </View>

            <View>
                <Text>Email Address</Text>
                <TextInput
                    placeholder='Text'
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            {/* generate function */}
            <TouchableOpacity
                    style={styles.signupButton} 
                    // onPress={}
                >
                    <Text style={styles.touchableOpacityText}>
                        Generate
                    </Text>
                </TouchableOpacity>

        </View>
    )
}

export default BankStatement;
