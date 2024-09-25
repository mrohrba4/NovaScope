import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('./../../assets/images/landingbackground.png')}
            styles={styles.background}
        >
            <Image source={require('./../../assets/images/landinglogo.png')} style={styles.logo} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginBottom: 50,
    },
    buttonContainer: {
        marginTop: 20,
    },
    button: {
        backgroundColor: '#F00B51',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        marginBottom: 20,
    },
    buttonText: {
        color: '#DDDDDD',
        fontWeight: 'bold',
        fontSize: 18,
    },
});