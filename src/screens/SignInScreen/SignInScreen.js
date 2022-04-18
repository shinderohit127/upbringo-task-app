import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

const SignInScreen = () => {
    const logo = require('../../../assets/upbringo-logo.png');
    return (
        <View style={styles.container}>
            {/* <Text>SignInScreen</Text> */}
            <Image source={logo} />
            <Text style={styles.title}>Please Select a Login Method</Text>
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
        fontFamily: 'Poppins',
        color: '#ebebeb',
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default SignInScreen