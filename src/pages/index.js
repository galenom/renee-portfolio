import React from 'react'
import { graphql, navigate } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import SEO from '../components/seo';
import { Layout } from '../components/Layout/Layout'
import styles from './styles/index.module.scss';

export default ({ data }) => {
    const { allFile: { images }, allPortfolioJson: { edges } } = data;

    return (
        <Layout>
            <SEO title="Portfolio" />
            <div className={styles.gallery}>
                {
                    images.map(({ node: { childImageSharp: { fluid } } }) => {
                        const edge = edges
                                    .map((edge) => edge.node)
                                    .find((edge) => edge.imageName === fluid.originalName);

                        return (
                            <button
                                className={
                                    [styles.thumbnail, edge && styles.thumbnailLink]
                                        .filter(Boolean)
                                        .join(' ')
                                } 
                                onClick={() => {
                                    if (edge) {
                                        navigate(`/${edge.id}`)
                                    }
                                }}
                            >
                                <GatsbyImage fluid={{ ...fluid }} className={styles.image} />
                            </button>
                        )
                    })
                }
            </div>
        </Layout>
    )
}
    
export const query = graphql`
    query {
        allFile(filter: {relativeDirectory: {eq: "portfolio"}}, sort: {fields: name, order: ASC}) {
            images: edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 490) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                            originalName
                        }
                    }
                }
            }
        }
        allPortfolioJson {
            edges {
                node {
                    id,
                    imageName
                }
            }
        }
    }
`