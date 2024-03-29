import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import RacesList from '../../features/racers/components/RacesList/RacesListContainer';
import { useDispatch } from 'react-redux';
import { ActionCreatorWithoutPayload } from '@reduxjs/toolkit';
import NavigationButton from '../../features/racers/components/NavigationButton/NavigationButton';

type RacesTableProps = {
  navigation: any;
  onClearRacesData: ActionCreatorWithoutPayload;
};

function RacesTable({ navigation, onClearRacesData }: RacesTableProps) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <NavigationButton onPress={handleOnPrevPagePress} title={'<'} />
    });
  }, []);
  const dispatch = useDispatch();
  const handleOnPrevPagePress = () => {
    dispatch(onClearRacesData());
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <RacesList />
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
