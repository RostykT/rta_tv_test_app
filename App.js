/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ReactNative, {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

import {useState, useRef} from 'react';

const App = () => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const [error, SetError] = useState(false);
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const userAdmin = {
    email: 'roku@roku.com',
    password: 'roku',
  };
  const handleSubmit = () => {
    if (email === userAdmin.email && password === userAdmin.password) {
      console.log('sign in successfully');
      //   NavigateToHome();
      SetError(false);
    } else {
      SetError(true);
      console.log('Russian warship, go fuck yourself');
    }
  };
  const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
    input: {
      width: 300,
      borderColor: error ? 'red' : 'black',
      borderWidth: 1,
      marginVertical: 5,
    },
  });

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <TouchableOpacity onFocus={() => emailInput.current.focus()}>
        <TextInput
          style={styles.input}
          ref={emailInput}
          placeholder="Email"
          onChangeText={email => SetEmail(email)}
        />
      </TouchableOpacity>
      <TouchableOpacity onFocus={() => passwordInput.current.focus()}>
        <TextInput
          style={styles.input}
          ref={passwordInput}
          placeholder="Password"
          onChangeText={password => SetPassword(password)}
        />
      </TouchableOpacity>
      <Button title="login" onPress={handleSubmit} />
    </SafeAreaView>
  );
};

export default App;
