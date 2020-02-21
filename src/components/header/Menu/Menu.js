import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { List } from './List';
import { HamburgerButton } from './HamburgerButton';
import styles from './Menu.module.scss'

export const Menu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const { links } = useStaticQuery(graphql`
        query {
            links: allNavigationJson { edges { node { id, title, link, externalLink } } }
        }
    `)
    

    return (
        <nav>
            {/* Mobile Nav */}
            <List
                links={links.edges}
                className={
                    [
                        styles.navLinks,
                        styles.navLinksMobile,
                        isNavOpen && styles.open
                    ].filter(Boolean).join(' ')
                }
            />
            {/* Desktop Nav */}
            <List
                links={links.edges}
                className={`${styles.navLinks} ${styles.navLinksDesktop}`}
            />
            <HamburgerButton {...{ isNavOpen, setIsNavOpen }} />
        </nav>
    );
}