import React from 'react'
import Carousel from '../components/carousel'
import Header from '../components/header'
import Footer from '../components/footer'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import ProductTag from '../components/productTag'
import { graphql } from 'gatsby'





export default function ProductDetails({data}) {

  const nodes = data.images.nodes;
  const img = getImage(nodes[3])
  console.log(img)
  const info = data.info;
  return (
    <div>
      <Header />
      {/* Body */}
      <div className='flex justify-center'>
         {/* title */}
        {/* Product Details */}
        <div className='flex justify-between my-4 w-4/6'>
          {/* Product Image */}
          {/* wrapper */}
          <div className='w-96 mx-4'>
            {/* carousel */}
            <Carousel nodes={nodes} hasPreview/>
          </div>
          {/* Product Description */}
          <div className='w-96 flex flex-col justify-between'>
            <div className='*:mb-2'>

              {/* Product Title */}
              <h1 className='text-2xl font-medium'>{info.title}</h1>
              {/* Product Tags */}
              <div className='flex'>
                {info.tags.map((tag) => ( <ProductTag key={tag} tag={tag}/> ))}
              </div>
              {/* Product Description */}
              <div>
                <h2>{info.description}</h2>
              </div>
            </div>

            {/* Division for Space*/}
            <div>
              {/* Price Tag */}
              <div className='mb-2'>
                  <p className='text-xl text-gray-500 italic font-extralight mr-1'>Starting at</p>
                <span className='flex items-baseline'>
                  <p className='text-lg text-secondary mr-1'>AED {info.price}</p>
                  <p className='text-gray-500 italic text-sm'>Excluding Vat</p>
                </span>
              </div>

              {/* Sizes */}
              <div className='flex'>
                  <ProductTag tag={'Litre'} selected={false}/>
                  <ProductTag tag={'Gallon (3.6 ltrs)'} selected={false}/>
                  <ProductTag tag={'Drum (16.2 ltrs)'} selected/>
              </div>

            </div>
  

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query ProductDetails($slug: String) {
    images: allFile(
      filter: {relativeDirectory: {eq: $slug}, sourceInstanceName: {eq: "images"}}
    ) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
        id
      }
    }
    info: productsJson(slug: {eq: $slug}) {
      features
      description
      price
      slug
      tags
      title
    }
  }
`;
