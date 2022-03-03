import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import VideoComponent from './src/componets/VideoComponent';

import Video from 'react-native-video';

const App = () => {
  const [loginView, setLoginView] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const handleTouch = () => {
    setShowVideo(!showVideo);
  };
  console.log(showVideo);
  return (
    <View>
      {/* {!loginView ? (
        <LoginScreen setLoginView={setLoginView} />
      ) : showVideo ? (
        <VideoComponent />
      ) : (
        <HomeScreen handleTouch={handleTouch} />
      )}
      {showVideo && <VideoComponent handleTouch={handleTouch} />} */}
      {!loginView ? (
        <LoginScreen setLoginView={setLoginView} />
      ) : !showVideo ? (
        <HomeScreen handleTouch={handleTouch} />
      ) : (
        <VideoComponent handleTouch={handleTouch} />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
export default App;
