import React from 'react';
import { Button, SafeAreaView, StatusBar, View } from 'react-native';
import RacerButtonContainer from '../features/racers/components/RacerButton/RacerButtonContainer';
import DriversList from '../features/racers/components/DriversList/DriversListContainer';

function DriversTable() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <RacerButtonContainer />
        <DriversList />
      </SafeAreaView>
    </View>
  );
}

export default DriversTable;
