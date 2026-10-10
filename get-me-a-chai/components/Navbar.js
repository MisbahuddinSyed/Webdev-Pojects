"use client"
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from "next-auth/react"
import { useState } from 'react'
import  { useRouter } from 'next/navigation'




const Navbar = () => {

  const { data: session, status } = useSession()
  const [showDropdown, setShowDropdown] = useState(false)
  const [creator, setCreator] = useState('')
  const username = session?.user?.email
  const router = useRouter()

  const handleSubmit =(e) => {
    e.preventDefault()
    router.push(`/${creator}`)
  }
  



  return (
    <nav className='bg-slate-950 text-white flex justify-between items-center p-2 px-5'>
      <Link href={'/'}>
        <div className="logo text-3xl font-bold flex items-center">
          <img className='w-15' src="/tea.gif" alt="" />
          <span>Get me a Chai</span>
        </div>
      </Link>
      <div className="links">
        <ul className="font-medium flex flex-col justify-center items-center p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">

          <li>
            <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Services</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Pricing</a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Contact</a>
          </li>
          <li>

            <div onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="cursor-pointer inline-flex items-center justify-center text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none" type="button">
              Dropdown button
              <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7" /></svg>


              <div id="dropdownHover" className={`absolute top-14 right-10 z-10 ${showDropdown ? "" : "hidden"} bg-gray-500 border border-default-medium rounded-base shadow-lg w-88`}>
                <ul className="p-2 text-sm text-body font-medium" aria-labelledby="dropdownHoverButton">

                  {session && <Link href="/dashboard">
                    <li className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Dashboard
                    </li>
                  </Link>}

                  {session && <Link href={`/${username}`} ><li className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">My Profile
                  </li></Link>}

                  <li>

                    <div>
                      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                      <label htmlFor="search" className="block mb-2.5 text-sm font-medium text-heading sr-only ">Search</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                          <svg className="w-4 h-4 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
                        </div>
                        <input onChange={(e)=>setCreator(e.target.value)} type="search" id="search" className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-sm" placeholder="Enter exact username" required />
                        <button type='submit' className="absolute end-1.5 bottom-1.5 text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none">Search</button>
                      </div>
                    </form>
                    </div>

                  </li>
                  {!session &&
                    <Link href='/login'><li className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Login
                    </li></Link>}

                  {session &&
                    <li onClick={() => signOut({ callbackUrl: "/" })} className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded">Sign out
                    </li>}
                </ul>
              </div>
            </div>


          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
