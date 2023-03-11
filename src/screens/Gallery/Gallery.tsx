import React from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';

type GalleryProps = {
  onPress: () => void;
};

function Gallery({ onPress }: GalleryProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Button title={'Load Photos'} onPress={onPress} />
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
export default Gallery;
