import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type DriverItemProps = {
  driverId: string;
  url: string;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  //TODO DZ correct types
  onPress: any;
  onLinkPress: any;
};

function DriverItem({ driverId, url, fullName, dateOfBirth, nationality, onPress, onLinkPress }: DriverItemProps) {
  const handlePress = () => onPress(driverId);
  const handleLinkPress = () => onLinkPress(url);

  return (
    <View style={styles.container}>
      <View style={styles.nameCell}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.linkStyle}>{fullName}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.dateCell}>
        <Text>{dateOfBirth}</Text>
      </View>
      <View style={styles.countryCell}>
        <Text numberOfLines={1} ellipsizeMode={'tail'}>
          {nationality}
        </Text>
      </View>
      <View style={styles.racesCell}>
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={styles.linkStyle} numberOfLines={1}>
            races
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row'
  },
  nameCell: {
    padding: 10,
    width: 100
  },
  dateCell: {
    padding: 10,
    width: 110
  },
  countryCell: {
    padding: 10,
    width: 100
  },
  racesCell: {
    padding: 10,
    minWidth: 60
  },
  linkStyle: {
    color: 'blue'
  }
});

export default DriverItem;
