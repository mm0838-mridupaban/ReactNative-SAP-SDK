import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Header;
