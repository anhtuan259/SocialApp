import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { tw } from 'react-native-tailwindcss';
import Avatar from '../src/components/avatar';
import { styleContainer } from '../styles/styleHome';

export default class ProfileScreen extends Component {

    render() {
        return (
            <>
                <View style={styleContainer.containerContent}>
                    <View style={[tw.justifyBetween, tw.alignCenter]}>
                        <Avatar source={require('../assets/avata1.jpg')} />
                    </View>
                    <View style={[tw.mY4, tw.hPx, tw.bgGray400]} />
                </View>

            </>
        )
    }
}
