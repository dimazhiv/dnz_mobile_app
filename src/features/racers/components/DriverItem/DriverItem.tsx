import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

export type DriverItemProps = {
    "driverId": string,
    "url": string,
    "givenName": string,
    "familyName": string,
    "dateOfBirth": string,
    "nationality": string
};

function DriverItem({
                        driverId,
                        url,
                        givenName,
                        familyName,
                        dateOfBirth,
                        nationality
                    }: DriverItemProps) {
    return (
        <View style={styles.container}>
            <Text>{driverId}</Text>
            <Text>{givenName}</Text>
            <Text>{familyName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingLeft:60,
        alignItems: 'center',
        flexDirection: 'row'
    }
});


export default DriverItem;
