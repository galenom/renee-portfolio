import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { List } from './List';
import { HamburgerButton } from './HamburgerButton';
import styles from './Menu.module.scss'

export const Menu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const {
        markdownRemark: {
            frontmatter: {
                menuList
            }
        }
    } = useStaticQuery(graphql`
            query {
                markdownRemark(fileAbsolutePath: { regex: "/src/data/menu/index.md$/" }) {
                    frontmatter {
                        menuList {
                            label
                            link
                            order
                            isExternal
                        }
                    }
                }
            }
    `)  
    
    menuList.sort((a, b) => a.order - b.order);

    return (
        <nav>
            {/* Mobile Nav */}
            <List
                links={menuList}
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
                links={menuList}
                className={`${styles.navLinks} ${styles.navLinksDesktop}`}
            />
            <HamburgerButton {...{ isNavOpen, setIsNavOpen }} />
        </nav>
    );
}