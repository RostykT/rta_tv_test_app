import React from 'react';
import Films from '../componets/Films';

const HomeScreen = ({handleTouch}) => {
  return (
    <>
      <Films handleTouch={handleTouch} />
    </>
  );
};

export default HomeScreen;
