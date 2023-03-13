import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type TableHeaderProps = {
  firstColumn: string;
  secondColumn: string;
  thirdColumn: string;
  fourthColumn: string;
};

function TableHeader({ firstColumn, secondColumn, thirdColumn, fourthColumn }: TableHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.nameCell}>
        <Text style={styles.text}>{firstColumn}</Text>
      </View>
      <View style={styles.dateCell}>
        <Text style={styles.text}>{secondColumn}</Text>
      </View>
      <View style={styles.countryCell}>
        <Text style={styles.text} numberOfLines={1} ellipsizeMode={'tail'}>
          {thirdColumn}
        </Text>
      </View>
      <View style={styles.racesCell}>
        <Text style={styles.text} numberOfLines={2}>
          {fourthColumn}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  nameCell: {
    padding: 10,
    width: 100,
    fontWeight: 'bold'
  },
  dateCell: {
    padding: 10,
    width: 110,
    fontWeight: 'bold'
  },
  countryCell: {
    padding: 10,
    width: 100,
    fontWeight: 'bold'
  },
  racesCell: {
    padding: 10,
    minWidth: 60,
    fontWeight: 'bold'
  },
  text: {
    color: 'black',
    fontWeight: 'bold'
  }
});

export default TableHeader;
