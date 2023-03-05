import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import DriverInfoComponent from '../features/racers/components/DriverInfo/DriverInfoContainer';

function DriverInfo({ navigation }) {
  navigation.setOptions({
    title: 'Driver info'
  });

  return (
    <SafeAreaView style={styles.container}>
      <DriverInfoComponent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
});

export default DriverInfo;
