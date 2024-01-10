import { SafeAreaView } from "react-native-safe-area-context"
import { View } from "react-native"
import { AccountsComponent } from "../../components/Accounts/AccountsComponent"
import { styles } from "../../styles/styles"
import { useState } from "react"

const AddMoneyScreen = () => {
    const [isNaira, setIsNaira] = useState(true)
    const [isDollar, setIsDollar] = useState(false)
    const [isPounds, setIsPounds] = useState(true)

    const accounts = []

    if (isNaira === true) {
        accounts.push(["Naira", "012345678"])
    }

    if (isDollar === true) {
        accounts.push(["Dollar", "098765432"])
    }

    if (isPounds === true) {
        accounts.push(["Pounds", "0246813579"])
    }


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.accounts_wrapper}>
                {accounts.map((account, id) => (
                    <AccountsComponent key={id} account={account[0]} accountNum={account[1]}/>
                ))}
            </View>
        </SafeAreaView>
    )
}

export default AddMoneyScreen