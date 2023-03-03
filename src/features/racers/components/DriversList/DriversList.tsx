import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DriverItem from '../DriverItem/DriverItemContainer';

export type DriversListProps = {
  driversIds: [];
};

const renderItem = ({ item }) => <DriverItem driverId={item} />;

const renderSeparator = () => <View style={styles.separator} />;

function DriversList({ driversIds }: DriversListProps) {
  return (
    <View style={styles.container}>
      <FlatList
        ItemSeparatorComponent={renderSeparator}
        contentContainerStyle={styles.flatList}
        data={driversIds}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  flatList: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 20
  },
  separator: {
    flex: 1,
    paddingTop: 20
  }
});

export default DriversList;
