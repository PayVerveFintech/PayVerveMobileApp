import { View, Text, Pressable, Image } from "react-native"
import { EvilIcons } from '@expo/vector-icons';
import { styles } from "./styles";


const Beneficiaries = ({ accountName, bankName, accountNumber, onPress }) => {
    
  return (
    <View style={styles.container}>
        <Image />
        <View style={styles.accountDetails}>
            <Text style={styles.accountName}>{accountName}</Text>
            <Text style={styles.bankDetails}>{bankName} - {accountNumber}</Text>
        </View>
        <Pressable
          onPress={onPress}
        >
            <EvilIcons name="trash" size={34} color="#FF1E1E" />
        </Pressable>
    </View>
  )
}

export default Beneficiaries