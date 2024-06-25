import React from 'react'

export default function Header() {
  return (
    <nav className='flex bg-blue-100 justify-between py-6 px-16 items-baseline font-bold'>
    {/* Website Name */}
        <h2 className='text-xl font-medium'>Asia Exhibition</h2>
        {/* Links */}
        <div className='flex justify-between'>
            <p className='mx-4 font-medium'>Products</p>
            <p className='mx-4 font-medium'>Services</p>
            <p className='mx-4 font-medium'>Contact Us</p>
        </div>
    </nav>
  )
}
