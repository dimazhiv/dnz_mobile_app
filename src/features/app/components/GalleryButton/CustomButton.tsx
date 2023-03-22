import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export type CustomButtonProps = {
  title: string;
  onPress: () => void;
};

function CustomButton({ onPress, title }: CustomButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}



const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    height: 50,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  }
});

export default CustomButton;
