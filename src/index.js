import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import SplashScreen from 'react-native-splash-screen'
import { goToSignin, goToHome } from './navigations/navigation';

export default function App(props) {
    useEffect(() => {
        // SplashScreen.hide();
        // goToHome();
    }, []);

    // const checkAuth = () => {
    //     try {
    //         const user = false;
    //         console.log('user: ', user);
    //         if (user) {
    //             goToHome();
    //         } else {
    //             goToSignin();
    //         }
    //     } catch (err) {
    //         console.log('error: ', err);
    //         goToSignin();
    //     }
    // };
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Loading</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 28,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FAFCFF',
    },
});
