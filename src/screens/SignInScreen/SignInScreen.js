import { View, Text, Image, StyleSheet, Button, Alert, Pressable } from 'react-native'
import React, { useState } from 'react'

const SignInScreen = () => {
    const logo = require('../../../assets/upbringo-logo.png');
    const [loggedIn, setloggedIn] = useState(false);
    const [userInfo, setuserInfo] = useState([]);
    return (
        <View style={styles.container}>
            {/* <Text>SignInScreen</Text> */}
            <Image source={logo} />
            <Text style={styles.title}>Please Select a Login Method</Text>
            <Pressable style={styles.googleSignInBtn} onPress={() => Alert.alert("Google")}>
                <Text style={styles.text}>Sign In with Google</Text>
            </Pressable>
            <Pressable style={styles.facebookSignInBtn} onPress={() => Alert.alert("Facebook")}>
                <Text style={styles.text}>Sign In with Facebook</Text>
            </Pressable>
            <Pressable style={styles.githubSignInBtn} onPress={() => Alert.alert("Github")}>
                <Text style={styles.text}>Sign In with Github</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6b1fa8',
        width: '100%',
        alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 80,
    },
    title: {
        paddingVertical: 40,
        // fontFamily: 'Poppins',
        color: '#ebebeb',
        fontSize: 24,
        fontWeight: 'bold',
    },
    googleSignInBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#2ea3f2',
        width: '80%',
        marginVertical: 15,
    },
    facebookSignInBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#29487d',
        width: '80%',
        marginVertical: 15,
    },
    githubSignInBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#666666',
        width: '80%',
        marginVertical: 15,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#2ea3f2',
        width: '80%',
        marginVertical: 15,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
})

export default SignInScreen