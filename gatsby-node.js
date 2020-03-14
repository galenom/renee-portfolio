const path = require(`path`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.onCreateNode = ({ node }) => {
    fmImagesToRelative (node);
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allProjectPosts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/src/data/projects/.*\.md$/"}}) {
                edges {
                    node {
                        frontmatter{
                            path
                            id
                        }
                    }
                }
            }
        }
    `)
    result.data.allProjectPosts.edges.forEach(({ node: { frontmatter } }) => {
        createPage({
            path: frontmatter.path,
            component: path.resolve(`./src/templates/portfolio-template.js`),
            context: {
                id: frontmatter.id
            },
        })
    })
}