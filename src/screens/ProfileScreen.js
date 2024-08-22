import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <Text style={styles.text}>Welcome to your profile!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default ProfileScreen;