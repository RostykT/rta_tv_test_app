import React, {useState, useCallback, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  findNodeHandle,
} from 'react-native';

const FilmItem = ({title, image, hasTVPreferredFocus, blockFocusRight}) => {
  const [focus, setFocus] = useState(false);

  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setFocus(false);
  }, []);

  const touchableHighlightRef = useRef(null);
  const onRef = useCallback(ref => {
    if (ref) {
      touchableHighlightRef.current = ref;
    }
  }, []);

  return (
    <TouchableHighlight
      onFocus={onFocus}
      onBlur={onBlur}
      hasTVPreferredFocus={hasTVPreferredFocus}
      style={[styles.wrapper, focus ? styles.wrapperFocused : null]}
      ref={onRef}
      nextFocusRight={
        blockFocusRight ? findNodeHandle(touchableHighlightRef.current) : null
      }>
      <View>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderColor: 'transparent',
    borderWidth: 4,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  wrapperFocused: {
    borderColor: '#714add',
  },
  imageFocused: {
    width: 210,
    height: 160,
  },
  image: {
    width: 200,
    height: 150,
    borderRadius: 10,
  },
  text: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FilmItem;
