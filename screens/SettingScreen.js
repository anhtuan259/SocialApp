import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'
import * as firebase from 'firebase'

export default class SettingsScreen extends React.Component {
    static navigationOptions = {
        // header: null
        headerShown: false
    };

    state = {
        email: "",
        displayNamedisplayName: ""
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

                <Text>hi !{this.state.displayName}</Text>

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