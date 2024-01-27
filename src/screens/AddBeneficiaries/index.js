import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputBox from "../../components/InputBox"
import { Button } from "../../components/ButtonComponent/Button"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"
import { useInfo } from "../../context/userInfo"
import Header from "../../components/HeaderComponent"



const AddBeneficiaries = () => {
    const navigation = useNavigation()

    const [accountName, setAccountName] = useState("")
    const [bankName, setBankName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
  
    //beneficiary context
    const { setBeneficiaries } = useInfo()
    
    //capture account name
    const captureNameInput = (text) => {
      setAccountName(text)
    };

    //capture bank name
    const captureBankInput = (text) => {
      setBankName(text)
    };

    //capture account number
    const captureAccountNumberInput = (text) => {
      setAccountNumber(text)
    };


    const addNewBeneficiary = () => {
  
      // Add a new beneficiary to the list
      setBeneficiaries((prevBeneficiaries) => [
        ...prevBeneficiaries,
        {
          accountName,
          bankName,
          accountNumber
        }
      ]);
  
      // Clear input fields after adding a beneficiary
      setAccountName("");
      setBankName("");
      setAccountNumber("");
  
      // navigate to the "Manage Beneficiaries" screen
      navigation.navigate("Manage Beneficiaries");
    };


    return (
      <SafeAreaView style={styles.container}>
          <Header title="Add Beneficiaries" />
          <View style={styles.formView}>
              <InputBox 
                  label="Bank Name" 
                  placeholder="Bank Name" 
                  value={bankName}
                  onChangeText={captureBankInput}
              />
              
              <InputBox 
                  label="Account Name" 
                  placeholder="Account Name" 
                  value={accountName} 
                  onChangeText={captureNameInput}
              />
              
              <InputBox 
                  label="Account Number" 
                  placeholder="Account Number" 
                  value={accountNumber}
                  onChangeText={captureAccountNumberInput}
                  keyboardType="number-pad"
              />

          </View>

          <Button btn_text="Add" onPress={addNewBeneficiary} />
      </SafeAreaView>
    )
}

export default AddBeneficiaries