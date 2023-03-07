import React, { useEffect } from 'react';
import { Button, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import DriversList from '../../features/racers/components/DriversList/DriversListContainer';
import { DRIVERS_TABLE_SCREEN } from '../../rootConstants';

type Props = {
  navigation: any;
  showPrevButton: boolean;
  onNextPagePress: () => void;
  onPrevPagePress: () => void;
};

function DriversTable({ showPrevButton, navigation, onNextPagePress, onPrevPagePress }: Props) {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => showPrevButton && <Button onPress={handleOnPrevPagePress} title={'<'} />,
      headerRight: () => <Button onPress={handleOnNextPagePress} title={'>'} />
    });
  }, []);

  const handleOnPrevPagePress = () => {
    onPrevPagePress();
    navigation.goBack();
  };
  const handleOnNextPagePress = () => {
    onNextPagePress();
    navigation.push(DRIVERS_TABLE_SCREEN);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <DriversList />
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
