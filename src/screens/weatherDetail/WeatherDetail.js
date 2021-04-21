import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import MapView from 'react-native-maps';
import cloudImage from "./../../assets/images/731429-200.png"

export default function WeatherDetail(props) {
    // console.log(props, "WeatherDetail")
    const [region, setRegion] = useState({});
    useEffect(() => {
        onRegionChange({
            latitude: props.data.coord.lat,
            longitude: props.data.coord.lon,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
    }, []);

    const onRegionChange = (region) => {
        setRegion(region);
    }

    return (
        <View style={styles.container}>
            <View style={{ position: 'relative', height: 500 }}>
                <MapView
                    style={{ left: 0, right: 0, top: 0, bottom: 0, position: 'absolute' }}
                    region={region}
                    onRegionChange={onRegionChange}
                />
            </View>
            <View style={styles.detailContainer}>
                <View style={styles.cityName}>
                    <Text style={styles.cityNameText}>{props.data?.name}</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.weatherInfotext}>{props.data?.weather?.[0]?.main}</Text>
                        <Text style={styles.weatherInfotext}>{"Humadity: " + props.data?.main?.humidity}</Text>
                        <Text style={styles.weatherInfotext}>{"Wind Speed: " + props.data?.wind?.speed}</Text>
                        <Text style={styles.weatherInfotext}>{"Max. temp: " + parseInt(props.data?.main?.temp_max - 273.15) + "°C"}</Text>
                        <Text style={styles.weatherInfotext}>{"Min. temp: " + parseInt(props.data?.main?.temp_min - 273.15) + "°C"}</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
                        <Text style={styles.tempDetail}>{parseInt(props.data?.main?.temp - 273.15)}°C</Text>
                        <Image
                            style={{ height: 100, width: 100 }}
                            source={cloudImage}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    cityName: {

    },
    cityNameText: {
        fontSize: 24,
        fontWeight: "500",
        marginBottom: 12
    },
    detailContainer: {
        padding: 20
    },
    weatherInfotext: {
        fontSize: 18,
        marginBottom: 12
    },
    tempDetail: {
        fontSize: 34,
        marginTop: -10
    }
});

WeatherDetail.options = {
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
        backButton: {
            color: 'white',
            showTitle: false,
        },
        background: {
            color: '#00804A'
        }
    }
}