import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  Platform,
  findNodeHandle,
  Image,
} from 'react-native';
import Style from './Style';
import FocusableHighlight from './FocusableHighlight';

const COLS = 5;
const ROWS = 15;
const films = [
  {
    Title: 'Terminator 2: Judgment Day',
    Year: '1991',
    imdbID: 'tt0103064',
    Type: 'movie',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
  },
  {
    Title: 'The Terminator',
    Year: '1984',
    imdbID: 'tt0088247',
    Type: 'movie',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Terminator 3: Rise of the Machines',
    Year: '2003',
    imdbID: 'tt0181852',
    Type: 'movie',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg',
  },
  {
    Title: 'Terminator Salvation',
    Year: '2009',
    imdbID: 'tt0438488',
    Type: 'movie',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BODBlOTJhZjItMGRmYS00YzM1LWFmZTktOTJmNDMyZTBjMjBkXkEyXkFqcGdeQXVyMjMwNDgzNjc@._V1_SX300.jpg',
  },
  {
    Title: 'Terminator Genisys',
    Year: '2015',
    imdbID: 'tt1340138',
    Type: 'movie',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjM1NTc0NzE4OF5BMl5BanBnXkFtZTgwNDkyNjQ1NTE@._V1_SX300.jpg',
  },
  {
    Title: 'Terminator: Dark Fate',
    Year: '2019',
    imdbID: 'tt6450804',
    Type: 'movie',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOWExYzVlZDgtY2E1ZS00NTFjLWFmZWItZjI2NWY5ZWJiNTE4XkEyXkFqcGdeQXVyMTA3MTA4Mzgw._V1_SX300.jpg',
  },
  {
    Title: 'Terminator: The Sarah Connor Chronicles',
    Year: '2008–2009',
    imdbID: 'tt0851851',
    Type: 'series',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZGE2ZDgyOWUtNzdiNS00OTI3LTkwZGQtMTMwNzM4YWUxNGNhXkEyXkFqcGdeQXVyNjU2NjA5NjM@._V1_SX300.jpg',
  },
  {
    Title: 'Terminator 3: Rise of the Machines',
    Year: '2003',
    imdbID: 'tt0364056',
    Type: 'game',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA5OTk4MTQwNV5BMl5BanBnXkFtZTgwMzkxNTEwMTE@._V1_SX300.jpg',
  },
  {
    Title: 'Lady Terminator',
    Year: '1989',
    imdbID: 'tt0095483',
    Type: 'movie',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTg5NTA1NzEtNWNiNy00ZTc4LWJhZTgtYmJkODZhYWI3NmQ4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
  },
  {
    Title: 'Terminator 2: Judgment Day',
    Year: '1991',
    imdbID: 'tt0244839',
    Type: 'game',
    Directed_by: 'James Cameron',
    Country: 'USA',
    Description: `Lorem ipsum dolor sit amet,
         consectetur adipiscing elit, 
         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
         Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
         Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2FhOTQ2MmQtNTY0OC00NWYyLThjNjMtZmZiOTBmYTY4MmM2XkEyXkFqcGdeQXVyMzM4MjM0Nzg@._V1_SX300.jpg',
  },
];
const FlatListDemo = () => {
  const flatListRef = useRef();

  useEffect(() => {
    if (Platform.OS === 'web' && flatListRef.current) {
      let node = findNodeHandle(flatListRef.current);
      if (node) {
        // Set FlatList spatial navigation action as focus to avoid scroll on up
        node.style.setProperty('--spatial-navigation-action', 'focus');
      }
    }
  }, []);

  function onItemFocus(e, item) {
    // Get row
    const row = Math.floor(item.index / COLS);
    // Get styles
    const rowsStyle = StyleSheet.flatten(styles.rows);
    const rowItemStyle = StyleSheet.flatten(styles.rowItem);
    // Get rows width / height
    const rowsHeight = rowsStyle.height;
    // Get item width / height
    const itemHeight = rowItemStyle.height + rowItemStyle.margin * 2;
    // Get vertical offset for current row in rows
    const itemTopOffset = itemHeight * row;
    // Scroll vertically to current row
    const rowsHeightHalf = rowsHeight / 2;
    if (itemTopOffset >= rowsHeightHalf - itemHeight) {
      flatListRef.current.scrollToOffset({
        offset: itemTopOffset,
        animated: true,
      });
    } else {
      flatListRef.current.scrollToOffset({offset: 0, animated: true});
    }
  }

  //   function renderItem(item) {
  //     const flatListItem = item.item;
  //     const key = item.Title;
  //     return (
  //       <FocusableHighlight
  //         onPress={() => {}}
  //         onFocus={e => {
  //           onItemFocus(e, item);
  //         }}
  //         underlayColor={Style.buttonFocusedColor}
  //         style={styles.rowItem}
  //         nativeID={key}
  //         key={key}>
  //         <Text style={styles.text}>{flatListItem.index}</Text>
  //       </FocusableHighlight>
  //     );
  //   }

  //   const rowItemStyle = StyleSheet.flatten(styles.rowItem);
  //   const rowItemHeight = rowItemStyle.height;

  //   // Render
  //   return (
  //     <View style={Style.styles.content}>
  //       <FlatList
  //         ref={flatListRef}
  //         style={styles.rows}
  //         nativeID={'flatlist'}
  //         data={films}
  //         renderItem={renderItem}
  //         numColumns={3}
  //         keyExtractor={item => item.index}
  //         getItemLayout={(data, index) => {
  //           return {length: rowItemHeight, offset: rowItemHeight * index, index};
  //         }}
  //         showsVerticalScrollIndicator={false}
  //       />
  //     </View>
  //   );
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.item}>
        <FocusableHighlight>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{uri: item.Poster}}
            key={index}
          />
          <Text style={styles.text}>{item.Title}</Text>
        </FocusableHighlight>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        style={styles.container}
        data={films}
        renderItem={renderItem}
        keyExtractor={item => `key-${item.Title}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rows: {
    width: Style.px(1520),
    height: Style.px(780),
  },
  rowItem: {
    width: Style.px(284),
    height: Style.px(240),
    margin: Style.px(10),
    backgroundColor: Style.buttonUnfocusedColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: Style.px(40),
  },
});

export default FlatListDemo;
