import React from 'react'
import { graphql, navigate } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import SEO from '../components/seo';
import { Layout } from '../components/Layout/Layout'
import styles from './styles/index.module.scss';

export default ({ data }) => {
    const { markdownRemark: { frontmatter: { imageList } } } = data;

    imageList.sort((a, b) => a.order - b.order);

    return (
        <Layout>
            <SEO title="Portfolio" />
            <div className={styles.gallery}>
                {
                    imageList.map(({ image: { childImageSharp: { fluid } }, path }) => {
                        return (
                            <button
                                className={
                                    [styles.thumbnail, path && styles.thumbnailLink]
                                        .filter(Boolean)
                                        .join(' ')
                                } 
                                onClick={() => {
                                    if (path) {
                                        navigate(path)
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
        markdownRemark(fileAbsolutePath: {regex: "/src/data/galleries/homepage.md$/"}) {
            frontmatter {
                imageList {
                    order
                    path
                    image {
                        childImageSharp {
                            fluid(maxWidth: 490) {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                }
            }
        }
    }
`