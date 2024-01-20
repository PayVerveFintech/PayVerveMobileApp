import { View, Text, Pressable} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../components/ButtonComponent/Button"
import { useState } from "react"
import ReferralModal from "../../components/ModalComponent/ReferralModal"
import { styles } from "./styles"
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native"
import { useInfo } from "../../context/userInfo"



const ReferFriends = () => {
  const navigation = useNavigation()

  const [visible, setVisible] = useState(false)
  const [openModal, setOpenModal] = useState(false)

  const { point } = useInfo()

  const toggleView = () => {
    setVisible(!visible)
  }

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  //navigate to data screen and pass along point details
  const buyData = () => {
    navigation.navigate("Data", {havePoints: "referPoints"})
  }

  //navigate to airtime screen and pass along point details
  const buyAirtime = () => {
    navigation.navigate("Airtime", {havePoints: "referPoints"})
  }

  //navigate to referral history screen
  const viewReferralHistory = () => {
    navigation.navigate("Referral History")
  }


  return (
    <SafeAreaView style={styles.container}>
        {point ? 
            <View style={styles.pointWrapper}>
                <View style={styles.pointFlex}>
                  <View style={styles.referralPointContainer}>
                    <Text style={styles.referralPointText}>Referral point</Text>
                    <Text style={styles.referralTextBold}>{visible ? point : "****"}</Text>
                  </View>

                  <View>
                    <MaterialIcons name={visible ? "visibility" : "visibility-off"} size={22} color="black" onPress={toggleView} />
                  </View>
                </View>

                <Text style={styles.referralInfoText}>
                    {point >= 5000 
                        ? `You now have a total of ${point} points which can be used to buy Airtime or Data` 
                        : "Keep referring friends and family to accumulate more points"}
                </Text>

                <Pressable
                  style={styles.usePointBtn}
                  onPress={toggleModal}
                >
                  <Text style={styles.referralInfoText}>Use Point</Text>
                </Pressable>
            </View>

            : null
        }

        <View style={styles.referralInfoWrapper}>
            <Text style={styles.referralTextBold}>Refer Friends and get points</Text>
            <Text style={styles.referralInfoBody}>Do you know that when you invite your friends you get a whooping 500 
              points which can be used to buy airtime, or data once you have an accumulation  
              of 5,000 point 
            </Text>
        </View>

        <View style={styles.referralCta}>
            <Button btn_text="Share your referral link" />
            <Pressable
              style={styles.referralHistory}
              onPress={viewReferralHistory}
            >
              <Text style={styles.referralHistoryText}>View Referral History</Text>
            </Pressable>
        </View>

        <View style={styles.claimBonus}>
            <Text style={styles.claimBonusHeader}>How to claim your bonus</Text>

            <View style={styles.claimBonusBody}>
              <Text style={styles.claimBonusText}>1. Share your link with friends and family</Text>
              <Text style={styles.claimBonusText}>2. Ensure your friends and family make use of your link when downloading PayVerve App</Text>
              <Text style={styles.claimBonusText}>3. Once the App has been downloaded, users need to actively use their account and Viola we all get happy.</Text>
            </View>
        </View>

        {openModal 
          ? <ReferralModal 
              visible={openModal}
              onClose={toggleModal}
              buyAirtime={buyAirtime}
              buyData={buyData}
            />

          : null
        }
    </SafeAreaView>
  )
}

export default ReferFriends