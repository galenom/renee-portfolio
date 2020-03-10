import React from 'react';
import styles from './HamburgerButton.module.scss'

export const HamburgerButton = ({ isNavOpen, setIsNavOpen }) => {
    return (
        <button
            className={
                [styles.hamburger, isNavOpen && styles.open]
                    .filter(Boolean)
                    .join(' ')
            }
            onClick={() => setIsNavOpen(!isNavOpen)}
        >
            <div className={styles.bar1}></div>
            <div className={styles.bar2}></div>
            <div className={styles.bar3}></div>
        </button>
    )
};