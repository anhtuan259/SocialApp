import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image, LayoutAnimation, ImageBackground } from 'react-native'
import * as firebase from "firebase";

export default class RegisterScreen extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }

    handleSignUp = () => {
        const { email, password } = this.state
        console.log(email);
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                    displayName: this.state.name
                })
            })
            .catch(error => this.setState({ errorMessage: error.message }));
    }

    render() {
        return (

            <View style={styles.container}>
                <StatusBar barStyle='light-content]' />
                <ImageBackground source={require('../assets/backgroudLogin.png')} style={styles.coverImage} >


                    <View style={styles.borderLogin}>

                        <Text style={styles.greeting}>
                            {`Hello again.\nWelcomeBack.`}
                        </Text>
                        <View style={styles.errorMessage}>
                            {this.state.errorMessage &&
                                <Text style={styles.error}>
                                    {this.state.errorMessage}
                                </Text>}
                        </View>


                        <View style={styles.form}>
                            <View >
                                <Text
                                    style={styles.inputTitle} >Name</Text>

                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"

                                    onChangeText={name => this.setState({ name })}
                                    value={this.state.name}
                                ></TextInput>
                            </View>
                            <View >
                                <Text
                                    style={styles.inputTitle} >Email</Text>

                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"

                                    onChangeText={email => this.setState({ email })}
                                    value={this.state.email}
                                ></TextInput>
                            </View>

                            <View style={{ marginTop: 30, }}>
                                <Text style={styles.inputTitle}>Password</Text>
                                <TextInput
                                    style={styles.input}
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                ></TextInput>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.handleSignUp}

                            >
                                <Text style={styles.testButton}>Create</Text>
                            </TouchableOpacity>

                            <View>

                            </View>

                        </View>
                    </View>
                </ImageBackground>



            </View >
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    greeting: {
        marginTop: 35,
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center",
        color: "#fff"
    },
    errorMessage: {
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
    },

    error: {
        color: '#E9446A',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center'
    },

    form: {
        marginBottom: 48,
        marginHorizontal: 30,
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 17,
        // textAlign: 'uppercase'
    },
    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 35,
        fontSize: 20,
        color: "#fff",
        padding: 5,
    },
    button: {
        backgroundColor: '#ffe6e6',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        padding: 10,
        borderRadius: 10

    },
    testButton: {
        //color: 'crimson',s
        fontSize: 20
    },
    textButton: {
        color: 'red'
    },
    viewText: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
    },
    text: {
        margin: 5,
        color: '#fff'
    },
    coverImage: {
        height: "100%",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    borderLogin: {
        width: '85%',
        height: 500,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.35)',
        shadowColor: '#000000',
        shadowOffset: {
            width: 1,
            height: 3
        },
    },

})