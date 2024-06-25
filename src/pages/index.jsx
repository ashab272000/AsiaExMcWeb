import React from 'react'
import { StaticImage, getImageData } from 'gatsby-plugin-image'
import Header from '../components/header'
import { graphql } from 'gatsby'
import ProductInfo from '../components/productInfo'
import Footer from '../components/footer'



export default function Home() {

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
                        <ProductInfo />
                        <ProductInfo />
                        <ProductInfo />
                        <ProductInfo />
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </div>
    )
}

