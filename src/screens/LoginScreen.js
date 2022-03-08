/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {useState, useRef} from 'react';

const LoginScreen = ({setLoginView}) => {
  const emailInput = useRef();
  const passwordInput = useRef();
  const [error, SetError] = useState(false);
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const userAdmin = {
    email: 'roku@',
    password: 'roku',
  };
  const handleSubmit = () => {
    if (email === userAdmin.email && password === userAdmin.password) {
      console.log('sign in successfully');
      //   NavigateToHome();
      setLoginView(true);
      SetError(false);
    } else {
      SetError(true);
    }
  };
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 50,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
    },
    button: {
      marginTop: 10,
      backgroundColor: '#316B83',
      width: 400,
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    input: {
      width: 400,
      borderColor: error ? 'red' : '#D1D1D1',
      borderWidth: 1,
      marginTop: 10,
      borderRadius: 5,
      padding: 10,
    },
    errorText: {
      color: 'red',
      fontSize: 10,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TouchableOpacity onFocus={() => emailInput.current.focus()}>
        <View>
          <TextInput
            style={styles.input}
            ref={emailInput}
            placeholder="Email"
            autoCapitalize="none"
            onChangeText={text => SetEmail(text)}
          />
          {error && (
            <Text style={styles.errorText}>Incorrect password or email</Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onFocus={() => passwordInput.current.focus()}>
        <View>
          <TextInput
            style={styles.input}
            ref={passwordInput}
            placeholder="Password"
            secureTextEntry
            onChangeText={text => SetPassword(text)}
          />
          {error && (
            <Text style={styles.errorText}>Incorrect password or email</Text>
          )}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSubmit} style={styles.button}>
        <Text style={{color: 'white'}}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;
