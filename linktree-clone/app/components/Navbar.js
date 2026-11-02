import React from 'react'



const Navbar = () => {
  return (
    <div className='flex gap-14 bg-white text-black fixed z-50 w-[80vw] top-[5vh] py-4 px-8 rounded-full'>

      <div className='flex justify-centre items-center'>
        <span className="text-3xl font-medium">BitTree </span>
        <span className='size-8'><img src="/tree.png" alt="" /></span>
      </div>

      <div className="btns flex items-center justify-start">
        <button className='py-2 px-5 hover:bg-gray-200 hover:rounded-lg '>Solutions</button>
        <button className='py-2 px-5 hover:bg-gray-200 hover:rounded-lg '>Features</button>
        <button className='py-2 px-5 hover:bg-gray-200 hover:rounded-lg '>Integrations</button>
        <button className='py-2 px-5 hover:bg-gray-200 hover:rounded-lg '>Resources</button>
        <button className='py-2 px-5 hover:bg-gray-200 hover:rounded-lg '>Pricing</button>
      </div>

      <div className="signup flex flex-1 justify-end gap-5">
        <button>Log in</button>
        <button className='bg-gray-900 text-white px-8 py-4 rounded-full'>Sign up free</button>
      </div>

    </div>
  )
}

export default Navbar
