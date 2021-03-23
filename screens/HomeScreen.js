import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import * as firebase from 'firebase'

export default class HomeScreen extends Component {


    state = {
        email: "",
        displayName: ""
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser;

        this.setState({ email, displayName });
    }

    signOutUser = () => {
        firebase.auth().signOut();
    }


    render() {
        return (

            <View style={styles.container}>
                <StatusBar barStyle="light-content" />

                <Text style={{ fontSize: 30, color: 'red', fontWeight: 'bold' }}>Home</Text>
                <TouchableOpacity
                    style={{ marginTop: 32 }}
                    onPress={this.signOutUser}
                >
                    <Text style={styles.button}>Logout</Text>
                </TouchableOpacity>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        color: 'white',
        backgroundColor: '#38ACEC',
        padding: 10,
        fontSize: 20,
        borderRadius: 10
    }
})