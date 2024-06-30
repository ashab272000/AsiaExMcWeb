const path = require('path')

exports.createPages = async ({ graphql, actions }) => {

    const result = await graphql(`
        query GetProductsJson {
            allProductsJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `)
    const data = result.data

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
      }

    data.allProductsJson.edges.forEach(edge => {
        actions.createPage({
            path: '/products/' + edge.node.slug,
            component: path.resolve('./src/templates/productDetails.jsx'),
            context: {slug: edge.node.slug}
        })
    })

}