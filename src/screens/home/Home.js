import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, FlatList, ScrollView } from 'react-native';
import SplashScreen from 'react-native-splash-screen'

export default function Home(props) {
    const [cityList, setCityList] = useState([]);

    useEffect(() => {
        SplashScreen.hide();
        fetchWeatherList();
    }, []);

    const fetchWeatherList = async () => {
        try {
            const cityListJson = await fetch(
                `http://api.openweathermap.org/data/2.5/find?lat=23.68&lon=90.35&cnt=50&appid=290527e6dcee81890fb548f19083cde3`, {}
            );
            const cityListResponse = await cityListJson.json();
            if (cityListResponse?.cod === "200") {
                setCityList(cityListResponse.list);
                console.log(cityListResponse)
            }
        } catch (error) {
            console.log(error, "error")
        }
    }
    const renderItem = ({ item }) => {
        console.log(item, "renderItem")
        return (
            <View style={styles.item}>
                <Text style={styles.title}>{item.name}</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={cityList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 28,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

Home.options = {
    topBar: {
        title: {
            text: 'WeatherApp',
            color: 'white',
            fontSize: 20,
            ...Platform.select({
                ios: { fontFamily: 'Arial', },
                android: { fontFamily: 'Roboto' }
            })
        },
        background: {
            color: '#00804A'
        }
    }
}