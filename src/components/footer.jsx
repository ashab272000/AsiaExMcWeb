import React from 'react'

export default function Footer() {
  return (
    <div className='bg-blue-950 w-full flex justify-center flex-col items-center'>
                    {/* Contacts */}
                    <div className='flex justify-between w-2/3 my-12 flex-wrap text-white'>
                        {/* Showroom Location Text */}
                        <div className='flex justify-center items-center mx-4'>
                            {/* Icons */}
                            <div className='rounded-full bg-yellow-400 w-12 h-12 flex justify-center items-center mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8 text-yellow-400">
                                    <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className='text-white'>Najda Street, Abu Dhabi</p>
                        </div>

                        {/* Telephone */}
                        <div className='flex justify-center items-center mx-4'>
                            {/* Icons */}
                            <div className='rounded-full bg-yellow-400 w-12 h-12 flex justify-center items-center mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <p className='text-white'>02 621 86 72</p>
                        </div>

                        {/* Whatsapp */}
                        <div className='flex justify-center items-center mx-4'>
                            {/* Icons */}
                            <div className='rounded-full bg-yellow-400 w-12 h-12 flex justify-center items-center mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill='white' className='size-8'>
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                                </svg>
                            </div>
                            <p className='text-white'>056 236 6881</p>
                        </div>
                        
                        {/* Email */}
                        <div className='flex justify-center items-center mx-4'>
                            {/* Icons */}
                            <div className='rounded-full bg-yellow-400 w-12 h-12 flex justify-center items-center mr-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-8">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                            </div>
                            <p className='text-white'>056 236 6881</p>
                        </div>
                        
                    </div>
                    {/* Google Maps Embed */}
                    <div className="google-map-code w-full relative">
                        <iframe
                            title='location'
                            src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d3630.9619548650576!2d54.369782075358984!3d24.48677502817516!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d24.486741!2d54.372389399999996!4m5!1s0x3e5e6643bc903be1%3A0x1783c4b3b22b4a93!2sJotun%20Multicolor%20-%20Asia%20Exhibition%20Multiple%20Colors%20-%206%20Fatima%20Bint%20Mubarak%20St%20-%20Zone%201%20-%20Abu%20Dhabi%20-%20United%20Arab%20Emirates!3m2!1d24.486760699999998!2d54.3723629!5e0!3m2!1sen!2sae!4v1719281118569!5m2!1sen!2sae"
                            // width="600"
                            className='w-full'
                            height="150"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            aria-hidden="false"
                        />
                    </div>
            </div>
  )
}
