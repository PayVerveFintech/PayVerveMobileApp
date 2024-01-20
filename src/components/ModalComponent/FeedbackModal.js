import { Modal, View, Text, Animated } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';

const FeedbackModal = ({ visible, onClose}) => {

    const scaleAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(scaleAnim, {
                    toValue: 1.4,
                    duration: 500,
                    useNativeDriver: true
                }),
                Animated.timing(scaleAnim, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true
                })
            ])
        ).start();
    }, []);

    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View style={styles.centeredView}>

                <View style={[styles.modalView, styles.feedbackModal]}>

                    <View style={styles.feedbackModalWrapper}>
                        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                            <Ionicons name="heart-sharp" size={100} color="#FF5555" />
                        </Animated.View>

                        <View style={styles.feedbackModalTextWrapper}>

                            <Text style={styles.feedbackModalText}>Thank you for your feedback.</Text>
                            <Text style={styles.feedbackModalText}>Your feedback helps us in serving you better</Text>

                        </View>

                    </View>

                </View>

            </View>

        </Modal>
    )
}

export default FeedbackModal