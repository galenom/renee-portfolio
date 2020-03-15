import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import styles from './Footer.module.scss';
import Img from 'gatsby-image';

export const Footer = () => {
    const images = useStaticQuery(graphql`
        fragment FooterImage on ImageSharp {
            fixed(width: 40, height: 40) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
            }
        }
        query {
            linkedin: imageSharp(fixed: {originalName: {eq: "linkedin.png"}}) {
                ...FooterImage
            }
            
            pinterest: imageSharp(fixed: {originalName: {eq: "pinterest.png"}}) {
                ...FooterImage
            }
        }
    `)

    return (
        <footer className={styles.footer}>
            <a
                href='https://www.linkedin.com/in/reneevalvarez'
                className={styles.logo}
            >
                <Img fixed={images.linkedin.fixed} alt='linked-in-logo' />
            </a>
            <a
                href='https://www.pinterest.com/reneevalvarez/'
                className={styles.logo}
            >
                <Img fixed={images.pinterest.fixed} alt='pinterest-logo' />
            </a>
        </footer>
    )
};