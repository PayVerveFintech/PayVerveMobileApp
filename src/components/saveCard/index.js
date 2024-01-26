import { View, Text } from "react-native";
import {FontAwesome, Ionicons, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { styles } from "./style";

export default function SaveCard({ item, title, type }) {
    return(
        <View>
            <View>
            </View>
        <View style={styles.container}>
            <Ionicons name={item.icon} size={25} />
                <View>
                    <View style={styles.trustContainer}>
                        <FontAwesome name='handshake-o' size={30} style={styles.trustIcon} />
                            <View>
                                <Text style={styles.trust}>{title} </Text>
                                <View style={styles.trustTextContainer}>
                            <Text style={styles.trustText}>{item} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </View>
    )
}