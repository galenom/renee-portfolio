import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/Layout"
import styles from './portfolio-template.module.scss'

export default ({ data }) => {
    const detail = data.portfolioJson
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
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!) {
        portfolioJson(fields: { slug: { eq: $slug } }) {
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
    }
`