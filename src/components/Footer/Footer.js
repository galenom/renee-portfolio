import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import styles from './Footer.module.scss';
import Img from "gatsby-image";

export const Footer = () => {
    const images = useStaticQuery(graphql`
        fragment servicesImage on File {
            childImageSharp {
                fixed(width: 40, height: 40) {
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                }
            }
        }
        query {
            linkedIn: file(relativePath: { eq: "assets/LinkedIn.png" }) {
                ...servicesImage
            }
            pinterest: file(relativePath: { eq: "assets/pinterest.png" }) {
                ...servicesImage
            }
        }
    `)

    return (
        <footer className={styles.footer}>
            <a
                href='https://www.linkedin.com/in/reneevalvarez'
                className={styles.logo}
            >
                <Img fixed={images.linkedIn.childImageSharp.fixed} alt='linked-in-logo' />
            </a>
            <a
                href='https://www.pinterest.com/reneevalvarez/'
                className={styles.logo}
            >
                <Img fixed={images.pinterest.childImageSharp.fixed} alt='pinterest-logo' />
            </a>
        </footer>
    )
};