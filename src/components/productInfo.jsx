import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'


function ProductInfo() {
  return (
    <div className='grid grid-cols-2 rounded-md bg-slate-200 p-8 w-2/6 m-4 items-center'>
      <StaticImage 
          src='../images/interior.jpg'
          width={400}
          className=' h-44 aspect-square rounded-full'
      />
      {/* description */}
      <div className='flex flex-col justify-between'>
          <div>
              <h1 className='text-2xl mb-4'>Wonderwall Lux</h1>
              <h1 className=' text-base mb-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, tempora.</h1>
          </div>
          <Link to='/products/wonderwallLux'>
            <div className='rounded bg-yellow-400 px-4 py-2 text-white w-32 text-center h-min'>View Price</div>
          </Link>

      </div>
  </div>
  )
}

export default ProductInfo