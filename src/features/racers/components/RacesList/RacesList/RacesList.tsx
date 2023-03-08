import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import RaceItem from '../RaceItem';
import { RaceData } from '../../../../../types/RaceData';

export type RacesListProps = {
  races: RaceData[];
};

const renderItem = ({ item }: { item: RaceData }) => <RaceItem race={item} />;

const renderSeparator = () => <View style={styles.separator} />;

function RacesList({ races }: RacesListProps) {
  return (
    <FlatList
      style={styles.flatList}
      ItemSeparatorComponent={renderSeparator}
      data={races}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  flatList: {
    paddingTop: 10,
    paddingBottom: 20
  },
  separator: {
    flex: 1,
    paddingTop: 20
  }
});

export default RacesList;
