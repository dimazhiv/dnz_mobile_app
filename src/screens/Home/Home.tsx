import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import GalleryButton from '../../features/app/components/GalleryButton/GalleryButtonContainer';
import RacersButton from '../../features/app/components/RacersButton/RacersButtonContainer';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <GalleryButton />
      <RacersButton />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  tinyLogo: {
    width: 300,
    height: 300
  }
});
export default Home;
