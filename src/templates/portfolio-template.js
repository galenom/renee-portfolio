import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/Layout'
import styles from './portfolio-template.module.scss'
import GatsbyImage from 'gatsby-image'

export default ({ data }) => {
    const {
        frontmatter: {
            id,
            title,
            iframe,
            images
        },
        html
    } = data.markdownRemark;

    return (
        <Layout>
            <div className={styles.detailContainer}>
                <section className={styles.detailsSection}>
                    <h2>{title}</h2>
                    <article dangerouslySetInnerHTML={{ __html: html }} />
                </section>
                { iframe && (
                    <iframe src={iframe} className={styles.iframe} title={`iframe-${id}`}/>
                )}
                {images && (
                    <section className={styles.images}>
                        {
                            images.map(({ childImageSharp: { fluid } }) => (
                                <GatsbyImage fluid={fluid} />
                            ))
                        }
                    </section>  
                )}
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($id: String!) {
        markdownRemark(frontmatter: {id: {eq: $id}}) {
            html
            frontmatter {
                id
                title
                iframe
                images {
                    childImageSharp {
                        fluid(maxWidth: 980) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64  
                        }
                    }
                }
            }
        }
    }
`