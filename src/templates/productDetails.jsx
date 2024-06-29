import React from 'react'
import Carousel from '../components/carousel'
import Header from '../components/header'
import Footer from '../components/footer'
import { StaticImage } from 'gatsby-plugin-image'
import ProductTag from '../components/productTag'




export default function ProductDetails() {
  return (
    <div>
      <Header />
      {/* Body */}
      <div className='m-4'>
         {/* title */}
        {/* Product Details */}
        <div className='flex justify-center my-4'>
          {/* Product Image */}
          {/* wrapper */}
          <div className='w-96 h-96 aspect-square bg-slate-100 mx-4'>
            {/* carousel */}
            <Carousel>
              <StaticImage className='w-full h-full flex-shrink-0 flex-grow overflow-hidden' src='../images/lux/lux-2.jpg' alt='2'/>
              <StaticImage className='w-full h-full flex-shrink-0 flex-grow overflow-hidden' src='../images/lux/lux-3.jpg' alt='3'/>
            </Carousel>
          </div>
          {/* Product Description */}
          <div className='w-96 flex flex-col justify-between'>
            <div className='*:mb-2'>

              {/* Product Title */}
              <h1 className='text-2xl font-medium'>Wonderwall Lux</h1>
              {/* Product Tags */}
              <div className='flex'>
                <ProductTag tag='Interior'/>
                <ProductTag tag='Smooth'/>
                <ProductTag tag='Washable'/>
              </div>
              {/* Product Description */}
              <div>
                <h2>This is a unique matt paint with a luxuriously smooth finish. With the new advanced easy-clean technology, it's the only matt paint that is as washable as silk paint. It has absolutely no smell or any harmful chemicals, actively purifies the air, and improves your indoor air quality.</h2>
              </div>
            </div>

            {/* Division for Space*/}
            <div>
              {/* Price Tag */}
              <div className='mb-2'>
                  <p className='text-xl text-gray-500 italic font-extralight mr-1'>Starting at</p>
                <span className='flex items-baseline'>
                  <p className='text-lg text-secondary mr-1'>AED 470</p>
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
