import React from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import RacerButtonContainer from '../features/racers/components/RacerButton/RacerButtonContainer';
import DriversList from '../features/racers/components/DriversList/DriversListContainer';
import { DRIVERS_TABLE_SCREEN } from '../rootConstants';

function DriversTable({ navigation }) {
  navigation.setOptions({
    title: 'Drivers',
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <DriversList />
      <RacerButtonContainer />
      <Button title="Next page" onPress={() => navigation.push(DRIVERS_TABLE_SCREEN)} />
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

export default DriversTable;
