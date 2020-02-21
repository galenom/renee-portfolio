import React from 'react';
import styles from './footer.module.scss';

export const Footer = () => (
    <footer className={styles.footer}>
        <a
            href='https://www.linkedin.com/in/reneevalvarez'
            className={styles.logo}
        >
            <img src={'/assets/LinkedIn.png'} alt='linked-in-logo' />
        </a>
        <a
            href='https://www.pinterest.com/reneevalvarez/'
            className={styles.logo}
        >
            <img src={'/assets/pinterest.png'} alt='pinterest-logo' />
        </a>
    </footer>
);