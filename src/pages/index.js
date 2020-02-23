import React from "react"
import { graphql } from 'gatsby';
import SEO from "../components/seo";
import { Layout } from "../components/Layout/Layout"
import styles from './index.module.scss';
import GatsbyImage from "gatsby-image";


export default ({ data }) => {
    const { allFile: { images } } = data;

    return (
        <Layout>
            <SEO title="Portfolio" />
            <div className={styles.gallery}>
                {
                    images.map(({ node: { childImageSharp: { fluid } } }) => (
                        <button className={styles.thumbnail}>
                            <GatsbyImage fluid={{ ...fluid }} />
                        </button>
                    ))
                }
            </div>
        </Layout>
    )
}
    
export const query = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "portfolio"}}) {
            images: edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 490) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
        }
    }
`