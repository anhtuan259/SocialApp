import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const Avatar = ({ source, online, story }) => {
    return (
        <View style={styles.Container}>
            <Image style={styles.User} source={source} story={story} />
            {/* {online && <View style={styles.UserActive} />} */}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: '100%',
        position: 'relative',
    },
    User: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: '#1777f2',
        borderWidth: 0.5
    },
    UserActive: {
        width: 15,
        height: 15,
        borderRadius: 8,
        backgroundColor: '#4bcb1f',
        position: 'absolute',
        bottom: -2,
        right: -2,
        borderWidth: 2,
        borderColor: '#ffffff',
    }
})

export default Avatar