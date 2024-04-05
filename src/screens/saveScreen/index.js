import { SafeAreaView, View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


import { styles } from "./style";
import { savePlans } from "../../service/savePlans";
import { widthPercentageToDP } from "react-native-responsive-screen";







export default function SaveScreen() {

    const navigation = useNavigation();


    const renderItem = ({ item }) => {
        return(
            <TouchableOpacity 
                style={styles.saveContainer}
                onPress={ () => navigation.navigate(item.screen)}
                >
               <View style={styles.saveIcon}>
                <Image 
                    source={item.image}
                    style={styles.image}
                />
               </View>
               <View style={styles.contentContainer}>
                <Text style={styles.saveTitle}> {item.saveType} </Text>
                <Text style={styles.saveDesc}> {item.description} </Text>
               </View>
            </TouchableOpacity>
        )
    }

    return(
        <SafeAreaView
            style={styles.root}
        >
            <View style={{ paddingHorizontal: widthPercentageToDP(3)}}>
                <View style={styles.header}>
                    <View style={styles.iconContainer}>
                        <Ionicons name="arrow-back" size={25} onPress={ () => navigation.goBack()} />
                    </View>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}> Save </Text>
                    </View>
                </View>
                <View style={styles.flatlistContainer}>
                    <FlatList 
                        scrollEnabled={false}
                        data={savePlans}
                        renderItem={renderItem}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}