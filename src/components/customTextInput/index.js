import { View, Text, TextInput } from 'react-native'
import { styles } from './style'




export default function CustomTextInput({ value,setValue, title, placeHolder, isNumber }) {
  return (
    <View style={styles.inputContainer} >
        <Text style={styles.title}> {title} </Text>
     <TextInput 
        placeholder={placeHolder}
        value={value}
        onChangeText={setValue}
        style={styles.input}
        keyboardType={isNumber? 'numeric' : null}
     />
    </View>
  )
}