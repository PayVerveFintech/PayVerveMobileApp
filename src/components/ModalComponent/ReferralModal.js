import { View, Modal, Text, Pressable } from "react-native"
import { styles } from "./styles"


const ReferralModal = ({ visible, onClose, buyData, buyAirtime }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>
                <View style={[styles.modalView, styles.referralPointModal]}>
                    <View style={styles.successfulScreenWrapper}>
                        <Text style={styles.referralModalHeader}>What will you like to use your point to buy?</Text>

                        <View style={styles.referralButtonFlex}>
                            <Pressable
                                style={[styles.referralButton, styles.dataButton]}
                                onPress={buyData}
                            >
                                <Text>Buy Data</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.referralButton, styles.airtimeButton]}
                                onPress={buyAirtime}
                            >
                                <Text>Buy Airtime</Text>
                            </Pressable>
                        </View>
                    </View>

                </View>

            </View>
        </Modal>
    )
}

export default ReferralModal