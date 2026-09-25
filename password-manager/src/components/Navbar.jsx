import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-purple-300 w-full flex justify-between items-center px-4 py-4 max-[540px]:justify-centre'>
        <div className="logo font-bold text-3xl max-[540px]:text-xl">
          <span className="text-blue-500">&lt;</span>
           Pass<span className='text-blue-500'>OP</span><span className='text-blue-500'>/&gt;</span></div>
        <ul>
          <li className="flex gap-4 items-center">
            <a className='hover:font-bold' href="">Home</a>
            <a className='hover:font-bold' href="">About</a>
            <a className='hover:font-bold' href="">Contact</a>
            <button className='size-15 hover:border border-blue-500'>
              <a href="" >
                <img  src="/github.svg" alt="" />
              </a>
            </button>
          </li>
        </ul>
    </nav>
  )
}

export default Navbar
