import { Navigation } from 'react-native-navigation';
import App from './../../src/index';
import Home from './../../src/screens/home/Home';

export function registerScreens() {
    Navigation.registerComponent('com.globalWeatherRN2.WelcomeScreen', () => App);
    Navigation.registerComponent('com.globalWeatherRN2.Home', () => Home);
}
