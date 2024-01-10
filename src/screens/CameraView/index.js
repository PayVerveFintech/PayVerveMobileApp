import { View, TouchableOpacity } from "react-native"
import { Camera } from "expo-camera"
import { useState, useRef } from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from '@expo/vector-icons';


const CameraScreen = () => {

    const [backImage, setBackImage] = useState(null);
    const [frontImage, setFrontImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    const navigation = useNavigation()

    const cameraRef = useRef(null);
    
    //function to toggle camera type
    function toggleCameraType() {
        setType(
            type === Camera.Constants.Type.back 
            ? Camera.Constants.Type.front 
            : Camera.Constants.Type.back
        );
        // console.log("toggle camera successful");
    }

    //function to take picture
    const handleTakePicture = async () => {
        if (cameraRef.current) {

          try {
            const { uri } = await cameraRef.current.takePictureAsync();

            // Handle the captured picture URI by navigating and forwarding to another screen
            if (type === Camera.Constants.Type.back) {
                setBackImage(uri)
                // console.log("back image taken:", uri)
                navigation.navigate("Proof of Address", {image: uri})

            } else if (type === Camera.Constants.Type.front) {
                setFrontImage(uri)
                // console.log("selfie taken:", uri)
                navigation.navigate("Proof of Address", {selfie: uri})
            }

            // console.log('Picture taken:', uri);
            
          } catch (error) {
            console.error('Error taking picture:', error);
          }
        }
    };


  return (
    <View style={styles.container}>
        <Camera
            style={styles.camera}
            ref={cameraRef}
        />

        <View style={styles.cameraButtons}>
            <View>
                <TouchableOpacity
                    onPress={toggleCameraType}
                >
                    <MaterialIcons name="flip-camera-android" size={50} color="#FFF" />
                </TouchableOpacity>
            </View>
    
            <View style={styles.captureWrapper}>
                <TouchableOpacity
                    onPress={handleTakePicture}
                    style={styles.capture}
                />
            </View>

            <View>
                <TouchableOpacity
                    // onPress={toggleCameraType}
                >
                    <MaterialIcons name="flip-camera-ios" size={50} color="#FFF" />
                </TouchableOpacity>
            </View>

        </View>
    </View>
  )
}

export default CameraScreen