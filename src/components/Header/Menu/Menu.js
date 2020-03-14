import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { List } from './List';
import { HamburgerButton } from './HamburgerButton';
import styles from './Menu.module.scss'

export const Menu = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const {
        allMenuItems: {
            edges: links
        }
    } = useStaticQuery(graphql`
        query {
            allMenuItems: allMarkdownRemark(
                filter: {
                    fileAbsolutePath: {
                        regex: "/src/data/menu/.*\\\\.md$/"
                    }
                },
                sort: {fields: frontmatter___order}
            ) {
                edges {
                    node {
                        frontmatter{
                            label
                            link
                            isExternal
                            order
                        }
                    }
                }
            }
        }
    `)
    

    return (
        <nav>
            {/* Mobile Nav */}
            <List
                links={links}
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
                links={links}
                className={`${styles.navLinks} ${styles.navLinksDesktop}`}
            />
            <HamburgerButton {...{ isNavOpen, setIsNavOpen }} />
        </nav>
    );
}