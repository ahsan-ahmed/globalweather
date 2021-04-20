import { Navigation } from 'react-native-navigation';
import Home from './../../src/screens/home/Home';
import WeatherDetail from './weatherDetail/WeatherDetail';

export function registerScreens() {
    Navigation.registerComponent('com.globalWeatherRN2.Home', () => Home);
    Navigation.registerComponent('com.globalWeatherRN2.WeatherDetail', () => WeatherDetail);
}
