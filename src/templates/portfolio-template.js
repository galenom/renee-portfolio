import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import styles from './portfolio-template.module.scss'
import GatsbyImage from "gatsby-image"

export default ({ data }) => {
    const { information } = data.portfolioJson
    const { images } = data.allFile
    return (
        <Layout>
            <div className={styles.detailContainer}>
                <section className={styles.detailsSection}>
                    <h2 className={styles.title}>{information?.title}</h2>
                    <p>{information?.description}</p>
                    {
                        information?.additionalDetails.map(({ sectionTitle, sectionDescription }) => (
                            <article key={sectionTitle}>
                                <h3 className={styles.sectionTitle}>{sectionTitle}</h3>
                                <p>{sectionDescription}</p>
                            </article>
                        ))
                    }
                </section>
                { information?.iframeUrl && (
                    <iframe src={information?.iframeUrl} className={styles.iframe} />
                )}
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
                },
                iframeUrl
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