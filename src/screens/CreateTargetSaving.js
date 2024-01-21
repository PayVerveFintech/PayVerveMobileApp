import { Image, Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { styles } from "../styles/styles";
import { ScrollView } from "react-native";
import { useState } from "react";

const CreateTargetSaving = ({navigation}) => {
    const [ts1, onChangeTS1] = useState('');
    const [ts2, onChangeTS2] = useState('');
    const [ts3, onchangeTS3] = useState('');
    const [ts4, onChangeTS4] = useState('');
    const [ts5, onChangeTS5] = useState('');
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
                <Text style={styles.header_Text_1}>
                    Target Savings
                </Text>
            </View>

            <Text style={styles.finance_header_text_1}>
                Take control of your financial journey with precision and purpose.
            </Text>

            <ScrollView>
                <Text>Give your savings a name</Text>
                <TextInput 
                    value={ts1}
                    placeholder='Text field'
                    onChangeText={onChangeTS1}
                    style={styles.textInput}
                />

                <Text>Target Amount</Text>
                <TextInput 
                    value={ts2}
                    placeholder='Text field'
                    onChangeText={onChangeTS2}
                    style={styles.textInput}
                />

                <Text>Frequency</Text>
                <TextInput 
                    value={ts3}
                    placeholder='How often'
                    onChangeText={onchangeTS3}
                    style={styles.textInput}
                />

                <Text>Start Date</Text>
                <TextInput 
                    value={ts4}
                    placeholder='Text field'
                    onChangeText={onChangeTS4}
                    style={styles.textInput}
                />

                <Text>End Date</Text>
                <TextInput 
                    value={ts5}
                    placeholder='Text field'
                    onChangeText={onChangeTS5}
                    style={styles.textInput}
                />

                <TouchableOpacity style={styles.signupButton}>
                    <Text style={styles.touchableOpacityText}>Next</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default CreateTargetSaving;