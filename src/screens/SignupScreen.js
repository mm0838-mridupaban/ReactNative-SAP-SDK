import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    navigation.navigate('Profile');
  };

  return (
    <View style={styles.container}>
      <Header title="Signup" />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Signup" onPress={handleSignup} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} style={styles.linkButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  linkButton: {
    marginTop: 20,
    backgroundColor: 'transparent',
  },
});

export default SignupScreen;