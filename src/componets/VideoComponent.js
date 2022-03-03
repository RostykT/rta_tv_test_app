import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import Video from 'react-native-video';
const viewWidth = Dimensions.get('window').width;
const viewHeight = Dimensions.get('window').height;
import TestVideo from '../../assets/video.mp4';

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 100,
    // right: 0,
    left: viewWidth * 0.214,
    // bottom: 0,
    width: viewWidth / 1.75,
    height: viewHeight / 1.75,
    backgroundColor: 'green',
  },
  wrapper: {
    width: viewWidth,
    height: viewHeight,
  },
});
console.log(viewWidth, viewHeight);
const VideoComponent = ({handleTouch}) => {
  return (
    <View style={styles.wrapper}>
      <TouchableWithoutFeedback onPress={handleTouch}>
        <View style={styles.backgroundVideo} />
      </TouchableWithoutFeedback>
    </View>

    // <Video
    //   // source={TestVideo}
    //   source={{
    //     uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1',
    //   }}
    //   ref={ref => {
    //     this.player = ref;
    //   }}
    //   onBuffer={this.onBuffer}
    //   onError={this.videoError}
    //   style={styles.backgroundVideo}
    // />
  );
};

export default VideoComponent;
