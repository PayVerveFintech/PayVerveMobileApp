import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from './style';









export default function TransferInput({ type }) {
  return (
    <View>
      {
        type === "Local" ? (
            <View style={styles.textInputMainContainer} >
                <View>
                    <Text style={styles.label}>Bank Name</Text>
                    <TextInput 
                        placeholder='Enter your bank name'
                        style={styles.input}
                    />

                </View>
                <View>
                    <Text style={styles.label}>Account Number</Text>
                    <TextInput 
                        placeholder='0123456789'
                        style={styles.input}
                    />

                </View>
                <View>
                    <Text style={styles.label}>Amount</Text>
                    <TextInput 
                        placeholder='2000'
                        style={styles.input}
                    />

                </View>
                <View>
                    <Text style={styles.label}>Narration</Text>
                    <TextInput 
                        placeholder='Have Fun'
                        style={styles.input}
                    />

                </View>
            </View>
        ) : (
            <View>
                <View>
                    <Text style={styles.label}>Country</Text>
                    <TextInput 
                        placeholder='Eg Nigeria'
                        style={styles.input}
                    />

                </View>
                <View>
                    <Text style={styles.label}>Bank Name</Text>
                    <TextInput 
                        placeholder='Enter bank name'
                        style={styles.input}
                    />

                </View>
                <View>
                    <Text style={styles.label}>Bank Swift</Text>
                    <TextInput 
                        placeholder='Enter the bank swift code'
                        style={styles.input}
                    />

                </View>
                <View>
                    <Text style={styles.label}>Account Number</Text>
                    <TextInput 
                        placeholder='0123456789'
                        style={styles.input}
                    />

                </View>
                <View>
                    <Text style={styles.label}>Amount</Text>
                    <TextInput 
                        placeholder='Enter amount'
                        style={styles.input}
                    />

                </View>
                <View>
                    <Text style={styles.label}>Narration</Text>
                    <TextInput 
                        placeholder='Have Fun'
                        style={styles.input}
                    />

                </View>
            </View>
        )
      }
    </View>
  )
}