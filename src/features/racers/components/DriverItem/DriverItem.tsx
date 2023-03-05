import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useOpenLink } from '../../../../hooks/hooks';

export type DriverItemProps = {
  driverId: string;
  url: string;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  //TODO DZ correct types
  onPress: any;
};

function DriverItem({ driverId, url, fullName, dateOfBirth, nationality, onPress }: DriverItemProps) {
  const handlePress = () => onPress(driverId);
  const handleLinkPress = useOpenLink(url);

  return (
    <View style={styles.container}>
      <View style={styles.nameCell}>
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.name}>{fullName}</Text>
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
          <Text style={styles.linkStyle} numberOfLines={2}>
            info
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
  name: {
    color: 'blue',
    fontWeight: 'bold'
  },
  linkStyle: {
    color: 'blue',
    textDecorationLine: 'underline'
  }
});

export default DriverItem;
