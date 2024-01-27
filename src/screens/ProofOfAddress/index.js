import { View, Text, Image, TouchableOpacity  } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../components/ButtonComponent/Button";
import { styles } from "./styles";
import { MaterialIcons, EvilIcons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import CameraPermission from "../../components/ModalComponent/CameraPermission";
import { useNavigation, useRoute } from "@react-navigation/native";
import { PersonalInfoProgress } from "../../components/PersonalInfoProgress";
import { Camera } from "expo-camera";
import Header from "../../components/HeaderComponent";


const ProofOfAddress = () => {
    const navigation = useNavigation()
    const route = useRoute()
    
    const [modalVisible, setModalVisible] = useState(false)
    const [utilityBill, setUtilityBill] = useState(false)
    const [selfie, setSelfie] = useState(false) 
    const [capturedImage, setCapturedImage] = useState(null)
    const [capturedSelfie, setCapturedSelfie] = useState(null)
     
    const [cameraPermission, setCameraPermission] = useState(null);

    
    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    //open camera
    const openCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();

        if (status === "granted") {
            setModalVisible(false); // Close modal when permission granted and camera starts
            navigation.navigate("Camera")
        } else {
            setCameraPermission(status);
        }
    };

    
    //receive uri data and pass to respective state variable
    useEffect(() => {
        if (route.params) {
            if (route.params.image) {
                // console.log("image :" , route.params.image)
                setUtilityBill(true)
                setCapturedImage(route.params.image)

            } else if (route.params.selfie) {   
                // console.log("selfie :" , route.params.selfie)
                setSelfie(true)
                setCapturedSelfie(route.params.selfie)
            }
        }

    }, [route.params])
    

    const requestCameraAccess = () => {
        setModalVisible(true);
    };

    const denyAccess = () => {
        setModalVisible(false);
    };

    //button action when documents are successfully uploaded
    const whenPress = () => {
        navigation.navigate("Confirmation")
    }



  return (
    <SafeAreaView style={styles.container}>
        <Header title="Proof of Address" />
        <View style={{gap: 32}}>
            <PersonalInfoProgress screen="proof" />

            <Text style={styles.headerText}>Ensure your background is clear and your picture is of high quality.</Text>

            <View style={styles.mediaWrapper}>
                <TouchableOpacity 
                    style={capturedImage ? styles.imageAvailable : styles.mediaInfoBox }
                    onPress={requestCameraAccess}
                >
                    {capturedImage 
                        ?   <Image source={{uri: capturedImage}} style={styles.capturedImage} />
                        :   <View style={styles.mediaInfoBox}>
                                <MaterialIcons name="upload-file" size={24} color="#101820" />
                                <Text style={{fontSize: 16}}>Kindly take a picture of your recent utility bill</Text>
                            </View>
                    }
                </TouchableOpacity>
                

                <TouchableOpacity 
                    style={capturedSelfie ? styles.imageAvailable : styles.mediaInfoBox }
                    onPress={requestCameraAccess}
                >
                    {capturedSelfie 
                        ?   <Image source={{uri: capturedSelfie}} style={styles.capturedImage}  />
                        :   <View style={styles.mediaInfoBox}>
                                <Text style={{fontSize: 16}}>Kindly take a selfie of yourself</Text>
                                <EvilIcons name="camera" size={24} color="#101820" />
                            </View>
                    }
                </TouchableOpacity>
            </View>

            <Button btn_text={utilityBill ? "Next" : "Start"} onPress={whenPress} disabled={!selfie} />

            {modalVisible 
                ? 
                    <CameraPermission 
                        visible={modalVisible} 
                        onClose={toggleModal} 
                        allowAccess={openCamera}
                        denyAccess={denyAccess}
                        // CameraPermission={cameraPermission}
                    />
                : null
            }

        </View>
            
    </SafeAreaView>
  )
}

export default ProofOfAddress