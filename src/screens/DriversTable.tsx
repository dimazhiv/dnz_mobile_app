import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import RacerButtonContainer from '../features/racers/components/RacerButton/RacerButtonContainer';
import DriversList from '../features/racers/components/DriversList/DriversListContainer';

function DriversTable() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <DriversList />
        <RacerButtonContainer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center' }
});

export default DriversTable;
