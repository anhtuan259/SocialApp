import React, { useSate, useEffect } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, StatusBar, Image, LayoutAnimation, ImageBackground, ImagePickerIOS } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import * as firebase from "firebase";
import { tw } from "react-native-tailwindcss";
import Constants from 'expo-constants';
import * as ImagePicker from "react-native-image-picker";

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        headerShown: false
    };

    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    }



    pickImage = async () => {

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

            <View style={[tw.flex1]}>
                <StatusBar barStyle='light-content]' />
                <ImageBackground source={require('../assets/backgroudLogin.png')} style={styles.coverImage} >
                    <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                        <Ionicons name='ios-arrow-back' size={25} color='#fff' />
                    </TouchableOpacity>
                    <View style={styles.header}>
                        <Text style={styles.greeting}>
                            {`Hello.\nCreate a account!.`}
                        </Text>

                        <TouchableOpacity style={styles.placeholder} onPress={this.pickImage}>
                            <Image source={require('../assets/avata1.jpg')} style={styles.avatar} />
                            <Ionicons name='ios-add' size={40} color='#fff' />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.errorMessage}>
                            {this.state.errorMessage &&
                                <Text style={styles.error}>
                                    {this.state.errorMessage}
                                </Text>}
                        </View>
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
                        <View style={{ marginTop: 30, }}>
                            <Text
                                style={styles.inputTitle} >Email</Text>
                            <TextInput
                                style={styles.input}
                                autoCapitalize="none"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            ></TextInput>
                        </View>
                        <View style={{ marginTop: 25, }}>
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
                            <Text style={[tw.fontSize]}>Create</Text>
                        </TouchableOpacity>


                    </View>

                </ImageBackground>
            </View >
        );
    }
}
const styles = StyleSheet.create({
    greeting: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "crimson"
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
    header: {
        marginTop: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    back: {
        position: "absolute",
        top: 30,
        left: 22,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21,22,48,0.1)",
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 17,
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
    form: {
        marginBottom: 48,
        marginHorizontal: 30,
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
        resizeMode: 'cover'
    },
    avatar: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 20,
        backgroundColor: "#E1E2E6",
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholder: {
        width: 100,
        height: 100,
        margin: 20,
        backgroundColor: '#E1E2E6',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    }

})