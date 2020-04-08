import React, { useReducer } from 'react';
import HeartEmpty from '@material-ui/icons/FavoriteBorder';
import Heart from '@material-ui/icons/Favorite';
import styles from './Favorite.module.scss';

export const Favorite = ({ title }) => {
  const reducer = (state, _) => {
    const isFavorited = !state.isFavorited;
    if (isFavorited) {
      localStorage.setItem(title, 'true');
    } else {
      localStorage.removeItem(title);
    }
    return { isFavorited }
  }
  const [{ isFavorited }, dispatch] = useReducer(reducer, { isFavorited: localStorage.getItem(title) })

  if (isFavorited) {
    return (
      <button
        className={styles.btn}
        onClick={(e) => dispatch()}
      >
        <Heart style={{ color: 'red' }} />
      </button>
    );
  } else {
    return (
      <button
        className={styles.btn}
        onClick={() => dispatch()}
      >
        <HeartEmpty style={{ color: 'white' }} />
      </button>
    );
  }
}