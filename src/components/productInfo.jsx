import { Link } from 'gatsby'
import { StaticImage, GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'


function ProductInfo({title, html, button_text, slug, image} ) {
  return (
    <div className='grid grid-cols-2 rounded-md bg-slate-200 p-8 m-4 items-center' style={{width:'500px'}}>
      <GatsbyImage 
          image={image}
          className=' h-44 aspect-square rounded-full'
      />
      {/* description */}
      <div className='flex flex-col justify-between'>
          <div>
              <h1 className='text-2xl mb-4'>{title}</h1>
              <div className='mb-4 *:list-disc *:text-sm'dangerouslySetInnerHTML={{__html: html}}></div>
          </div>
          <Link to={`/products/${slug}`}>
            <div className='rounded bg-yellow-400 px-4 py-2 text-white w-32 text-center h-min'>{button_text}</div>
          </Link>

      </div>
  </div>
  )
}

export default ProductInfo