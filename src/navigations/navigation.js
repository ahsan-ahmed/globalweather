// navigation.js
import { Navigation } from 'react-native-navigation';

export const goToSignin = () =>
    Navigation.setRoot({
        root: {
            stack: {
                id: 'App',
                children: [
                    {
                        component: {
                            name: 'Signin',
                            options: {
                                topBar: {
                                    visible: false,
                                    drawBehind: true,
                                    animate: false,
                                },
                            },
                        },
                    },
                ],
            },
        },
    });

export const goToSignup = () =>
    Navigation.setRoot({
        root: {
            stack: {
                id: 'App',
                children: [
                    {
                        component: {
                            name: 'Signup',
                            options: {
                                topBar: {
                                    visible: false,
                                    drawBehind: true,
                                    animate: false,
                                },
                            },
                        },
                    },
                ],
            },
        },
    });

export const goToHome = () =>
    Navigation.setRoot({
        root: {
            stack: {
                id: 'App',
                children: [
                    {
                        component: {
                            name: 'com.globalWeatherRN2.Home',
                            options: {
                                topBar: {
                                    visible: false,
                                    drawBehind: true,
                                    animate: false,
                                },
                            },
                        },
                    },
                ],
            },
        },
    });

export const goToOnBoarding = (props, name, text, item) =>
    Navigation.push(props.componentId, {
        component: {
            name: name,
            passProps: {
                data: item
            },
            options: {
                topBar: {
                    // title: {
                    //   text: text,
                    // },
                    visible: false,
                    drawBehind: true,
                    animate: false,
                },
            },
        },
    });
