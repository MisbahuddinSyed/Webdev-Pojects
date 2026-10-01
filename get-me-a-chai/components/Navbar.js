"use client"
import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from "next-auth/react"



const Navbar = () => {

   const { data: session, status } = useSession()

  

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
            {session ? (
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="rounded-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 px-4 py-2.5"
              >
                Logout
              </button>
            ) : (
              <Link href="/login">
                <button className="rounded-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 px-4 py-2.5">
                  Login
                </button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
