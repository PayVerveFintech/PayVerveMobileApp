import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { styles } from "./styles"
import InputBox from "../../components/InputBox"
import { useState, useEffect } from "react"
import { Button } from "../../components/ButtonComponent/Button"
import Header from "../../components/HeaderComponent"
import BankStatementModal from "../../components/ModalComponent/BankStatementModal"


const BankStatement = () => {

    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [email, setEmail] = useState("")
    const [modalVisible, setModalVisible] = useState(false)

    //useeffect to close modal after set timeout
    useEffect(()=>{
        let modalTimer;
        
        if (modalVisible === true) {
            modalTimer = setTimeout(()=>{
                    setModalVisible(false)
                }, 3000)
        }

        return () => {
            clearTimeout(modalTimer)
        };
    }, [modalVisible])


    //function to capture start date
    const handleStartDate = (text) => {
        setStartDate(text)
    }

    //function to capture end date
    const handleEndDate = (text) => {
        setEndDate(text)
    }

    //function to capture email
    const handleEmail = (text) => {
        setEmail(text)
    }

    //function to open modal on success
    const openModal = () => {
        //logic for generating bank statement (call api here)
        setModalVisible(true)
    }


    return (
        <SafeAreaView style={styles.container}>
            <Header title="Bank Statement" />

            <View style={styles.statementForm}>
                <InputBox 
                    label="Start Date"
                    placeholder="mm/dd/yyyy"
                    onChangeText={handleStartDate}
                    value={startDate}
                    keyboardType="number-pad"
                />

                <InputBox 
                    label="End Date"
                    placeholder="mm/dd/yyyy"
                    onChangeText={handleEndDate}
                    value={endDate}
                    keyboardType="number-pad"
                />

                <InputBox 
                    label="Email Address"
                    placeholder="you@email.com"
                    onChangeText={handleEmail}
                    value={email}
                />
            </View>

            <Button btn_text="Generate" onPress={openModal} />

            {modalVisible && <BankStatementModal visible={modalVisible} />}
        </SafeAreaView>
    )
}

export default BankStatement