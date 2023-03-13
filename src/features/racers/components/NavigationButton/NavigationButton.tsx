import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type NavigationButtonProps = {
  title: string;
  onPress: () => void;
};

function NavigationButton({ onPress, title }: NavigationButtonProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 25,
    color: 'blue',
    paddingHorizontal: 10
  }
});

export default NavigationButton;
