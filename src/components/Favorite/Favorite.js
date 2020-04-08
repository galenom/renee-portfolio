import React, { useReducer, useEffect } from 'react';
import HeartEmpty from '@material-ui/icons/FavoriteBorder';
import Heart from '@material-ui/icons/Favorite';
import styles from './Favorite.module.scss';

export const Favorite = ({ title, dark = false}) => {
  const reducer = (_, { favorite }) => {
    if (favorite) {
      localStorage.setItem(title, 'true');
    } else {
      localStorage.removeItem(title);
    }
    return { isFavorited: favorite }
  }
  const [{ isFavorited }, dispatch] = useReducer(
    reducer,
    { isFavorited: false }
  );

  useEffect(() => {
    const favorite = localStorage.getItem(title);
    dispatch({ favorite });
  }, []);

  let heart;
  if (isFavorited) {
    heart = <Heart style={{ color: 'red' }} />;
  } else {
    heart = <HeartEmpty style={{ color: dark ? 'black' : 'white' }} />;
  }

  return (
    <button
        className={styles.btn}
        onClick={(e) => dispatch({ favorite: !isFavorited })}
      >
        {heart}
      </button>
  )
}