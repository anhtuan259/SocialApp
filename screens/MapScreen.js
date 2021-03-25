import React, { Component } from 'react'
import {
    Text, View, StyleSheet,
    Dimensions
} from 'react-native'
import MapView from 'react-native-maps';

export default class MapScreen extends Component {


    render() {
        return (
            <View style={styles.container}>
                <MapView
                    initialRegion={{
                        latitude: 19.7680054,
                        longitude: 105.7775897,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={styles.map}
                    mapType={"satellite"}

                >
                    <MapView.Marker
                        coordinate={{
                            latitude: 19.7680054,
                            longitude: 105.7775897
                        }}
                        title={"hồng đức"}
                        description={"description"}
                    />
                </MapView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});