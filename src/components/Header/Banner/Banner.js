import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image';
import styles from './Banner.module.scss'

export const Banner = () => {
    const { headerImage } = useStaticQuery(graphql`
        query {
            headerImage: imageSharp(fixed: {originalName: {eq: "graphic-renee.png"}}) {
                fixed(width: 150, height: 150) {
                    ...GatsbyImageSharpFixed_withWebp_noBase64
                }
            }
        }
    `);

    return (
        <section className={styles.portfolioHeader}>
            <Img
                fixed={headerImage.fixed}
                className={styles.graphicRenee}
                alt='renee-graphic-rendition'
            />
            <div className={styles.descriptionWrapper}>
                <h1 className={styles.portfolioDescription}>
                    I'm Renee.
                </h1>
                <p>Creative | Graphic Designer</p>
            </div>
        </section>
    )
};