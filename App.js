import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
// import DetailScreen from './src/screens/DetailScreen';

const App = () => {
  const [loginView, setLoginView] = useState(true);
  return (
    <View>
      {!loginView ? (
        <LoginScreen setLoginView={setLoginView} />
      ) : (
        <HomeScreen />
      )}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
