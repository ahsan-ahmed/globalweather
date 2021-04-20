import { Navigation } from 'react-native-navigation';
import Home from './../../src/screens/home/Home';

export function registerScreens() {
    Navigation.registerComponent('com.globalWeatherRN2.Home', () => Home);
}
