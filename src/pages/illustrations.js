import React, { useState } from 'react'
import { graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image'

import { Layout } from '../components/Layout/Layout'
import SEO from '../components/seo'
import styles from './styles/illustrations.module.scss'
import { ExpandedGalleryImage } from '../components/ExpandedGalleryImage';

const IllustrationsPage = ({ data }) => {
    const {
        markdownRemark: {
            frontmatter: {
                illustrationImagesAndDetails
            }
        }
    } = data;

    illustrationImagesAndDetails.sort((a, b) => a.order - b.order)

    const [imageIndex, setImageIndex] = useState(null);

    return (
        <Layout>
            <SEO title="Illustrations" />
            <div className={styles.gallery}>
                {
                    illustrationImagesAndDetails.map(({ image }, idx) => {
                        return (
                            <button onClick={() => { setImageIndex(idx) }}>
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
            <ExpandedGalleryImage
                isVisible={imageIndex !== null}
                imageData={illustrationImagesAndDetails[imageIndex]}
                closeModal={() => {
                    setImageIndex(null);
                }}
                onPrevious={() => {
                    let newIndex = (imageIndex - 1) % (illustrationImagesAndDetails.length - 1);
                    if (newIndex < 0) {
                        newIndex = illustrationImagesAndDetails.length - 1
                    } 
                    setImageIndex(newIndex)
                }}
                onNext={() => {
                    const newIndex = (imageIndex + 1) % (illustrationImagesAndDetails.length - 1)
                    setImageIndex(newIndex)
                }}
            />
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
