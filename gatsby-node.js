const path = require(`path`)

exports.onCreateNode = ({ node, actions }) => {
    if (node.internal.type === 'PortfolioJson') {
        const { createNodeField } = actions;
        const slug = `/${node.id}/`;
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
}

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allPortfolioJson {
                edges {
                    node {
                        id
                    }
                }
            }
        }
    `)
    result.data.allPortfolioJson.edges.forEach(({ node }) => {
        createPage({
            path: `/${node.id}/`,
            component: path.resolve(`./src/templates/portfolio-template.js`),
            context: {
                id: node.id,
                imageFolderSlug: `portfolio/${node.id}`
            },
        })
    })
}