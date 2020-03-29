import React from 'react'
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image'

import { Layout } from '../components/Layout/Layout'
import SEO from '../components/seo'
import styles from './styles/illustrations.module.scss'

const IllustrationsPage = ({ data }) => {
    const {
        markdownRemark: {
            frontmatter: {
                illustrationImagesAndDetails
            }
        }
    } = data;

    illustrationImagesAndDetails.sort((a, b) => a.order - b.order)

    return (
        <Layout>
            <SEO title="Illustrations" />
            <div className={styles.gallery}>
                {
                    illustrationImagesAndDetails.map(({ image }) => {
                        return (
                            <button>
                                <GatsbyImage
                                    fluid={image.childImageSharp.fluid}
                                    className={styles.img}
                                    imgStyle={{ height: '325px' }}
                                />
                            </button>
                        );
                    })
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
    markdownRemark(fileAbsolutePath: { regex: "/src/data/galleries/illustrations/index.md$/" }) {
        frontmatter {
            illustrationImagesAndDetails {
                order
                title
                subtitle
                image {
                    id
                    childImageSharp {
                        fluid(maxWidth: 320) {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
}
`

export default IllustrationsPage
