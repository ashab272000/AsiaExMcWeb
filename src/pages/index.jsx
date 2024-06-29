import React from 'react'
import { StaticImage, getImage } from 'gatsby-plugin-image'
import Header from '../components/header'
import { graphql } from 'gatsby'
import ProductInfo from '../components/productInfo'
import Footer from '../components/footer'



export default function Home({data}) {

    const latestProducts = data.latestProducts.nodes;
    const images = data.images.nodes;
    const sort = data.sort.edges[0].node.sort.split(',')
    // console.log(data.sort.edges[0].node.sort)
    // const sort = "lux,life,tosuede,eterna,kanva,nuovo".split(',')

    return (
        <div>
            {/* Header and the front body are together for the sake screen adjustments */}
            <Header />
            {/* Body */}
            <div className='w-full'>

                {/* Visit Us Section */}
                <div className='w-full h-96 grid place-content-center'>
                    <StaticImage
                        src='../images/palettes.webp'
                        className='brightness-50'
                        style={{gridArea: "1/1",}}
                    />
                    <div
                        className='m-12 z-10 place-content-center grid  place-items-center'
                        style={{gridArea: "1/1",}}

                    >
                        <h1 className='text-4xl text-white mt-8 mb-2 text-center'>Get your catalogue today</h1>
                        <h1 className='text-2xl text-white mb-4 text-center'>by visiting our store</h1>
                        <div className='rounded bg-yellow-400 px-4 py-2 text-white w-32 text-center'>Visit us</div>

                    </div>
                </div>

                {/* Our Products Sections */}
                <div className='flex flex-col justify-center items-center m-8'>
                    <h1 className='text-4xl'>Dive into our products</h1>
                    <div className='flex m-4 justify-center'>
                        {/* Interior */}
                        <div className='grid w-72 h-72 m-8'>
                            <StaticImage
                                src='../images/interior.jpg'
                                className='brightness-75'
                                style={{gridArea: "1/1",}}
                            />
                            <div className='m-12 z-10 place-content-center grid place-items-center'style={{gridArea: "1/1",}}>
                                <h1 className='text-3xl text-white mb-4 text-center'>Interior</h1>
                            </div>
                        </div>
                        <div className='grid w-72 h-72 m-8'>
                            <StaticImage
                                src='../images/extr.jpg'
                                className='brightness-75'
                                style={{gridArea: "1/1",}}
                            />
                            <div className='m-12 z-10 place-content-center grid place-items-center'style={{gridArea: "1/1",}}>
                                <h1 className='text-3xl text-white mb-4 text-center'>Exterior</h1>
                            </div>
                        </div>
                        <div className='grid w-72 h-72 m-8'>
                            <StaticImage
                                src='../images/industrial.webp'
                                className='brightness-75'
                                style={{gridArea: "1/1",}}
                            />
                            <div className='m-12 z-10 place-content-center grid place-items-center'style={{gridArea: "1/1",}}>
                                <h1 className='text-3xl text-white mb-4 text-center'>Industrial</h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Latest Products */}
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-4xl m-4'>Latest Products</h1>
                    <div className='flex mb-4 w-full flex-wrap justify-center'>
                        {/* Product */}

                        {
                            
                        sort.map((slug) => {
                            let productImg = null;
                            let product = null;
                            // Get product according to the sort
                            for(let j = 0; j<latestProducts.length; j++){

                                    if(latestProducts[j].frontmatter.slug == slug){
                                        // Found the product, now find
                                        product = latestProducts[j];
                                        for (let i = 0; i < images.length; i++) {
                                            // Find the related image
                                            if(images[i].relativePath == product.frontmatter.image){

                                                productImg = getImage(images[i])
                                                break
                                            }
                                        }
                                    }


                            }

                            return (
                                <ProductInfo  key={product.id} title={product.frontmatter.title} html={product.html} slug={product.frontmatter.slug} button_text={product.frontmatter.button_text} image={productImg}/>
                             )
                            })
                        }
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

export const query = graphql`
query MyQuery {
  latestProducts: allMarkdownRemark(filter: {frontmatter: {slug: {ne: "sort"}}}) {
    nodes {
      id
      html
      frontmatter {
        title
        image
        link
        button_text
        type
        slug
      }
    }
  }
  sort: allLatestProductsJson {
    edges {
      node {
        sort
      }
    }
  }
  images: allFile(filter: {sourceInstanceName: {eq: "images"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
      relativePath
      name
    }
  }

}
` 

