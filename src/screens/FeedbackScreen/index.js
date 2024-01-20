import { TextInput, View, Text, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../../components/ButtonComponent/Button'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import FeedbackModal from '../../components/ModalComponent/FeedbackModal';

const FeedbackScreen = () => {

    const [starRating, setStarRating] = useState(0)
    const [selectRadio, setSelectRadio] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        // Function to close the modal after 3 seconds
        let closeModalTimeout;
      
      
        if (modalVisible === true) {
          closeModalTimeout = setTimeout(() => {
            setModalVisible(false);
          }, 5000);
        }

        return () => {
            clearTimeout(closeModalTimeout);
        };
    }, [modalVisible])


    //set rate on click
    const toggleStarRating = (index) => {
        setStarRating(index)
    }


    //radio button select function
    const selectRadioOnPress = (value) => {
        if (value === "yes") {
            setSelectRadio(value)
        } else if (value === "no") {
            setSelectRadio(value)
        }
    }

    //function to toggle modal
    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.formView}>
                <View style={styles.rateStar}>
                    <Text style={styles.label}>How will you rate PayVerve</Text>
                    <View style={styles.starRating}>
                        {[...Array(5)].map((star, index)=>{
                            index += 1

                            return (
                                <MaterialIcons 
                                    key={index} 
                                    name="star" 
                                    size={24} 
                                    color={(starRating >= index) ? "gold" : "#D9D9D9"} 
                                    onPress={() => toggleStarRating(index)} 
                                />
                            )
                        })}
                    </View>
                </View>

                <View style={styles.familyAndFriends}>
                    <Text style={styles.label}>Will you tell family & friends about PayVerve?</Text>
                    <View style={styles.radioWrapper}>
                        <View style={styles.radioOption}>
                            <Pressable 
                                onPress={() => selectRadioOnPress("yes")}
                                style={[styles.radioButton, selectRadio === "yes" ? styles.selectRadio : null]}
                            />
                            <Text>Yes</Text>
                        </View>
                        <View style={styles.radioOption}>
                            <Pressable 
                                onPress={() => selectRadioOnPress("no")}
                                style={[styles.radioButton, selectRadio === "no" ? styles.selectRadio : null]}
                            />
                            <Text>No</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.inputView}>
                    <Text style={styles.label}>What do you think we can do better?</Text>
                    <TextInput 
                        placeholder="Enter text"
                        style={styles.textInput}
                    />
                </View>

                <View style={styles.inputView}>
                    <Text style={styles.label}>What other feedback will you love to give?</Text>
                    <TextInput 
                        placeholder="Enter text"
                        style={[styles.textInput, styles.otherFeedback]}
                        textAlignVertical="top"
                        multiline
                    />
                </View>

            </View>

            <Button btn_text="Send" onPress={toggleModal}/>

            {modalVisible && 
                <FeedbackModal 
                    visible={modalVisible}
                    onClose={toggleModal}
                />
            }

        </SafeAreaView>
    )
}

export default FeedbackScreen