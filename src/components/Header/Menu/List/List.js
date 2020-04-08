import React from 'react';
import { Link } from './Link';
import styles from './List.module.scss';

export const List = ({ links, className }) => {
    return (
        <ul className={className}>
            {links.map((link) => (
                <li key={link.label} className={styles.menuList}>
                    <Link {...link} />
                </li>
            ))}
        </ul>
    );
}