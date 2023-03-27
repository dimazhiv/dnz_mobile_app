import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import DriversList from '../../features/racers/components/DriversList/DriversListContainer';
import NavigationButton from '../../features/racers/components/NavigationButton/NavigationButton';

type Props = {
  navigation: any;
  showPrevButton: boolean;
  onNextPagePress: () => void;
  onPrevPagePress: () => void;
};

function DriversTable({ showPrevButton, navigation, onNextPagePress, onPrevPagePress }: Props) {
  const goBack = () => navigation.goBack();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () =>
        showPrevButton ? (
          <NavigationButton onPress={onPrevPagePress} title={'<'} />
        ) : (
          <NavigationButton onPress={goBack} title={'X'} />
        ),
      headerRight: () => <NavigationButton onPress={onNextPagePress} title={'>'} />
    });
  }, [showPrevButton]);

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
