const { styles } = require('../../styles/styles')

const EnableFingerprint = ({navigation}) => {
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
                <Text style={styles.header_Text_1}> Enable Fingerprint </Text>
            </View>

            <Image 
                        source={require('../../../assets/fingerprintVector.png')}
                    />
        </View>
    )
}

export default EnableFingerprint;