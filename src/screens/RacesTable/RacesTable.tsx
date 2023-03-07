import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native';

type RacesTableProps = {};

function RacesTable({}: RacesTableProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Text>Races table placeholder</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
export default RacesTable;
