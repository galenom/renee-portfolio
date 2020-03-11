import React from 'react'
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image'

import { Layout } from '../components/Layout/Layout'
import SEO from '../components/seo'
import styles from './styles/illustrations.module.scss'

const IllustrationsPage = ({ data }) => {
    const illustrationsData = data.allIllustrationsJson.edges.sort((a, b) => (a.node.order - b.node.order))
    const images = data.allFile.images.map((edge) => edge.node.childImageSharp);

    return (
        <Layout>
            <SEO title="Illustrations" />
            <div className={styles.gallery}>
                {
                    illustrationsData.map((d) => {
                        const img = images.find((image) => image.fluid.originalName === d.node.imageName)

                        if (img) {
                            return (
                                <button>
                                    <GatsbyImage fluid={img.fluid} className={styles.img} imgStyle={{ height: '325px' }} />
                                </button>
                            );
                        }
                        return <p>{d.node.id}: {d.node.order}</p>
                    })
                }
            </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allIllustrationsJson {
            edges {
                node {
                    imageName
                    details {
                        title
                        subtitle
                    }
                    order
                }
            }
        }
        allFile(filter: {relativeDirectory: {eq: "illustrations"}}) {
            images: edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 320) {
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                            originalName
                        }
                    }
                }
            }
        }
    }
`

export default IllustrationsPage
