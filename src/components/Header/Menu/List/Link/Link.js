import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styles from './Link.module.scss';

export const Link = ({ frontmatter: { label, link, isExternal } }) => {
    if (isExternal) {
        return <a href={link} target='_blank' rel='noopener noreferrer'>{label}</a>;
    } else {
        return <GatsbyLink to={link} activeClassName={styles.selectedNav}>{label}</GatsbyLink>;
    }
}