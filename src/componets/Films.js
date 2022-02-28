import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import FilmItem from './FilmItem';

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

const Gallery = ({rowNumber}) => {
  return (
    <ScrollView horizontal style={styles.row}>
      {films.map((film, index) => (
        <FilmItem
          key={index}
          // title={film.Title}
          image={film.Poster}
          hasTVPreferredFocus={rowNumber === 0 && index === 0}
          blockFocusRight={index === film.length - 1}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    marginBottom: 50,
  },
});

export default Gallery;
