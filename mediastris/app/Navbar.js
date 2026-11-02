import React from 'react'

const Navbar = () => {
  return (
      <div className="bg-white text-black fixed z-50 w-[80vw] top-[5vh] py-5 px-10 rounded-full">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div >
            <img className='h-[114px]' src="/comp-logo.jpg" alt="" />
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 font-bold text-lg text-slate-600">
            <span className="hover:text-blue-600 cursor-pointer">Hospital Services</span>
            <span className="hover:text-blue-600 cursor-pointer">Patient Support</span>
            <span className="hover:text-blue-600 cursor-pointer">How It Works</span>
            <span className="hover:text-blue-600 cursor-pointer">Success Stories</span>
          </nav>

          <div className="flex items-center gap-3">
            <button className="h-[50px] flex justify-center items-center sm:inline-flex px-4 py-2 text-lg font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg">
              Contact Us
            </button>
            <button className="h-[50px] flex justify-center items-center px-4 py-2 text-lg font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm">
              Submit a Claim
            </button>
          </div>
        </div>
      </div>
  )
}

export default Navbar
