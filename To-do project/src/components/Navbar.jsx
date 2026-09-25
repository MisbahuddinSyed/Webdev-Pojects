import React from 'react'

const Navbar = () => {
  return (
    <div className='flex bg-yellow-600 justify-center w-full'>
        <div className="text-white flex flex-row justify-between w-2/3">
            <h1><b>iTask</b></h1>
            <ul className="list-none flex flex-row gap-5">
              <li>Home</li>
              <li><button>Your Tasks</button></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Navbar
