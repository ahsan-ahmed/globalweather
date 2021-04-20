import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function WeatherDetail(props) {
    return (
        <View style={styles.root}>
            <Text>Weather Detail</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
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