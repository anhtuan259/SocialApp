import React from 'react';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import { tw } from 'react-native-tailwindcss';
import { styleContainer } from "../styles/styleHome";

export default class RestaurantScreen extends React.Component {



    // renderItem = ({ item, index }) => (
    //     <TouchableOpacity>

    //         <View style={[tw.flexRow, tw.justifyBetween]}>
    //             <Text style={{ width: 120 }} rkType="bold">
    //                 name:
    //         </Text>
    //             <Text style={[tw.flex1, tw.textRight]}>
    //                 {item.name}
    //             </Text>
    //         </View>
    //         <View style={[tw.flexRow, tw.justifyBetween]}>
    //             <Text style={{ width: 120 }} rkType="bold">
    //                 đánh giá:
    //         </Text>
    //             <Text style={[tw.flex1, tw.textRight]}>
    //                 {item.danh_gia}
    //             </Text>
    //         </View>
    //     </TouchableOpacity>
    // );

    render() {
        return (
            <SafeAreaView style={styleContainer.containerContent}>
                <Text>Restaurant</Text>
            </SafeAreaView>
        )
    }
}


