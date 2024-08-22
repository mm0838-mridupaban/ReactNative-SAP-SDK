import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
import Header from '../components/Header';
import { TextInput} from 'react-native';

const LoginScreen = ({ navigation }) => {
// const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [number, onChangeNumber] = React.useState('');


  const handleLogin = () => {
    // Handle login logic here
    navigation.navigate('Profile');
    // console.log('Profile');
    // console.log('email',email);
    // console.log('password',password);
    // console.log('number',number);
  };

  return (
    <View style={styles.container}>
      {/* <Header title="Login" /> */}
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Signup" onPress={() => navigation.navigate('Signup')} style={styles.linkButton} />
      {/* <Button title="Go to Signup" style={styles.linkButton} /> */}
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
    backgroundColor: 'black',
    // backgroundColor: 'red',
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  }
});

export default LoginScreen;