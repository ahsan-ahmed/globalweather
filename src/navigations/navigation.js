// navigation.js
import { Navigation } from 'react-native-navigation';

export const goToHome = () =>
    Navigation.setRoot({
        root: {
            stack: {
                id: 'App',
                children: [
                    {
                        component: {
                            name: 'com.globalWeatherRN2.Home',
                        },
                    },
                ],
            },
        },
    });

export const goToStackNavigation = (props, name, text, item) =>
    Navigation.push(props.componentId, {
        component: {
            name: name,
            passProps: {
                data: item
            },
        },
    });
