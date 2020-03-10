import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import styles from './portfolio-template.module.scss'
import GatsbyImage from "gatsby-image"

export default ({ data }) => {
    const detail = data.portfolioJson
    const { images } = data.allFile
    return (
        <Layout>
            <div className={styles.detailContainer}>
                <section className={styles.detailsSection}>
                    <h2 className={styles.title}>{detail?.information?.title}</h2>
                    <p>{detail?.information?.description}</p>
                    {
                        detail?.information?.additionalDetails.map(({ sectionTitle, sectionDescription }) => (
                            <article key={sectionTitle}>
                                <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
                                <p>{sectionDescription}</p>
                            </article>
                        ))
                    }
                </section>
                <section className={styles.images}>
                    {
                        images.map(({ node: { childImageSharp: { fluid } } }) => {
                            console.log(fluid);
                            return <GatsbyImage fluid={fluid} />
                        })
                    }
                </section>
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($id: String!, $imageFolderSlug: String!) {
        portfolioJson(id: { eq: $id }) {
            id,
            information {
                title,
                description,
                additionalDetails {
                    sectionTitle,
                    sectionDescription
                }
            }
        }
        allFile(filter: {relativeDirectory: {eq: $imageFolderSlug }}) {
            images: edges {
                node {
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