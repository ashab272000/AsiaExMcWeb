exports.createPages = async ({ graphql, actions }) => {

    const {data} = await graphql(`
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

    data.allProductsJson.edges.forEach

}