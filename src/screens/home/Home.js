import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Home(props) {
    return (
        <View style={styles.root}>
            <Text>Hello WOrld</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
});
