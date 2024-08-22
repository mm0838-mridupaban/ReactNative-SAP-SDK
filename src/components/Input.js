import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = ({ placeholder, secureTextEntry, style, ...props }) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
});

export default Input;