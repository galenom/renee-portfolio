import React from 'react';
import { Link } from './Link';
import styles from './List.module.scss';

export const List = ({ links, className }) => {
    return (
        <ul className={className}>
            {links.map(({ node: link }) => (
                <li key={link.id} className={styles.menuList}>
                    <Link {...link} />
                </li>
            ))}
        </ul>
    );
}