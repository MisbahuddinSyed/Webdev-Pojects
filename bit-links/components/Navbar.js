import React from 'react'
import localfont from 'next/font/local';

const boldPoppins = localfont({
  src: '../app/fonts/Poppins-Bold.ttf',
  variable: '--font-boldPoppins',
  weight: '100 900'
});

const Navbar = () => {
  return (
    <div className='bg-green-600 flex items-center justify-between p-4 px-10 text-white'>
      <div>
        <h1 className={`text-6xl ${boldPoppins.className}`}>BitLinks</h1>
      </div>
      <div>
        <ul className='flex gap-4'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
