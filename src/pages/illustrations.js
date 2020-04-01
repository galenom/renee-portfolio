import React, {     useReducer } from 'react'
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

    const reducer = (state, { idx }) => {
        if (Number.isInteger(idx)) {
            const { title } = illustrationImagesAndDetails[idx];
            return {
                imageIdx: idx,
                titleTemplate: `${title} | %s`
            };
        } else if (idx === null) {
            return { imageIdx: null, titleTemplate: null };
        } else {
            return state;
        }
    }

    const [{ imageIdx, titleTemplate }, dispatch] = useReducer(reducer, {
        imageIdx: null,
        titleTemplate: null
    })

    return (
        <Layout>
            <SEO title="Illustrations" titleTemplate={titleTemplate} />
            <div className={styles.gallery}>
                {
                    illustrationImagesAndDetails.map(({ image }, idx) => {
                        return (
                            <button onClick={() => { dispatch({ idx }) }}>
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
                isVisible={imageIdx !== null}
                imageData={illustrationImagesAndDetails[imageIdx]}
                closeModal={() => {
                    dispatch({ idx: null })
                }}
                onPrevious={() => {
                    let newIndex = (imageIdx - 1) % (illustrationImagesAndDetails.length - 1);
                    if (newIndex < 0) {
                        newIndex = illustrationImagesAndDetails.length - 1
                    } 
                    dispatch({ idx: newIndex })
                }}
                onNext={() => {
                    const newIndex = (imageIdx + 1) % (illustrationImagesAndDetails.length - 1)
                    dispatch({ idx: newIndex })
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
