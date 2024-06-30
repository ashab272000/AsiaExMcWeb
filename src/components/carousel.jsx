import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState, useEffect } from 'react'



const Carousel = ({ nodes, hasPreview = true,autoSlide = false, autoSlideInterval = 3000 }) => {
    
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? nodes.length - 1 : curr - 1))

    const next = () => setCurr((curr) => (curr === nodes.length - 1 ? 0 : curr + 1))

    const preview = () => {
        if(hasPreview)
            {
                return (
                <div className='mt-4 flex justify-start *:mr-2'>
                    {nodes.map((node, index) => {
                        let image = getImage(node)
                        return (
                            <div className='w-1/6' key={node.id} onClick={() => {setCurr(index)}}>
                                <GatsbyImage image={image} alt=''/>
                            </div>
                        );
                    }) }
                </div>
                ) 
        } else {
            return (<></>);
        }

    }

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])


    return (
        <div>

            <div className='overflow-hidden relative w-full'>
                <div className='flex transition-transform ease-out duration-500 w-full' style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {nodes.map((node, index) => {
                        let image = getImage(node)
                        return (<GatsbyImage key={node.id} image={image} className='w-full h-full flex-shrink-0 flex-grow overflow-hidden' alt=''/>);
                    }) }
                </div>
                <div className="absolute inset-0 flex items-center justify-between p-4">
                    <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                    </button>
                    <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>

                    </button>
                </div>
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex items-center justify-center gap-2'>
                        {nodes.map((s, i) => (
                            <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                        ))}
                    </div>
                </div>
                {/* <div className='mt-4 flex justify-start *:mr-2'>
                    <GatsbyImage className='w-1/6' image={img} alt='2'/>
                    <StaticImage className='w-1/6' src='../images/lux/lux-2.jpg' alt='2'/>
                    <StaticImage className='w-1/6' src='../images/lux/lux-3.jpg' alt='3'/>
                </div> */}
            </div>
            {preview()}
        </div>

    )
}

export default Carousel