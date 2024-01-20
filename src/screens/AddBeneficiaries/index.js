import { View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import InputBox from "../../components/InputBox"
import { Button } from "../../components/ButtonComponent/Button"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"
import { useInfo } from "../../context/userInfo"



const AddBeneficiaries = () => {
    const navigation = useNavigation()

    const [accountName, setAccountName] = useState("")
    const [bankName, setBankName] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
  
    // const { beneficiaries, setBeneficiaries } = useState([]) //move state to state management e.g redux or contextApi

    //beneficiary context
    const { beneficiaries, setBeneficiaries } = useInfo()
    
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

      //data to pass along with navigation
      // const routeData = {
      //   beneficiaries: [
      //     ...beneficiaries,
      //     {
      //       accountName,
      //       bankName,
      //       accountNumber
      //     }
      //   ]
      // };
  
      // Pass the state variables to the "Manage Beneficiaries" screen
      navigation.navigate("Manage Beneficiaries");
    };


    return (
      <SafeAreaView style={styles.container}>
          <View style={styles.formView}>
              <InputBox 
                  label="Bank Name" 
                  placeholder="Bank Name" 
                  name="bankName"
                  value={bankName}
                  onChangeText={captureBankInput}
              />
              
              <InputBox 
                  label="Account Name" 
                  placeholder="Account Name" 
                  name="accountName"
                  value={accountName} 
                  onChangeText={captureNameInput}
              />
              
              <InputBox 
                  label="Account Number" 
                  placeholder="Account Number" 
                  name="accountNumber" 
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