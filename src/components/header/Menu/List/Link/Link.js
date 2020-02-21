import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styles from './Link.module.scss';

export const Link = ({ title, link, externalLink }) => {
    if (externalLink) {
        return <a href={externalLink} target='_blank' rel='noopener noreferrer'>{title}</a>;
    } else {
        return <GatsbyLink to={`${link}`} activeClassName={styles.selectedNav}>{title}</GatsbyLink>;
    }
}