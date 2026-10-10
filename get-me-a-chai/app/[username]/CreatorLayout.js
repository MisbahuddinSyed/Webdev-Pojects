"use client"
import React from 'react'
import { useState } from 'react'
import MembershipOptions from '@/components/Membership'
import Link from 'next/link'
import Nav from './Nav'
import { useContext } from 'react'
import { useUser } from './UserProvider'

const CreatorLayout = ()=> {

  const user = useUser()

  const [showMembership, setShowMembership] = useState(false)

        return (
        <>
            {showMembership && <MembershipOptions onClose={()=> setShowMembership(false)} />}
            <div>
                <div className="cover relative w-full">
                    <img className='w-full max-h-100' src={user.coverURL} alt="" />
                    <div className="pfp absolute -bottom-14 left-[47%] ">
                        <img className='size-32 rounded-lg' src={user.imgURL} alt="" />
                    </div>
                </div>
            </div>
            <div className='container text-sm mt-16 mx-auto flex flex-col items-center gap-3'>
                <div className="title font-bold text-3xl">@{user.name}</div>
                <div className="bio">creating Soul Nurturing/Bahá'í Inspired Music, Videos and Collab</div>
                <div className="members text-slate-400">253 members . 126 posts</div>
                <div className="buttons flex flex-col gap-3">
                    <button className='bg-blue-800 p-2 px-6 rounded-lg hover:bg-blue-700'>Join for free</button>
                    <button onClick={()=>setShowMembership(true)} className='bg-slate-800 p-2 px-6 rounded-lg hover:bg-slate-700'>See membership options</button>
                </div>
                <div className='mb-10'>
                    <Link href={"instagram.com"}>
                        <img className='size-6 cursor-pointer' src="/instagram.svg" alt="" />
                    </Link>
                </div>
                <Nav user={user} />
            </div>
            <div className="w-full h-0.5 bg-slate-700"></div>
           

        </>
    )}

export default CreatorLayout

