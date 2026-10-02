import React from 'react'
import Link from 'next/link'
import Nav from './Nav'

const CreatorLayout = async ({ children, params }) => {
    const { username } = await params
    return (
        <>
            <div>
                <div className="cover relative w-full">
                    <img className='w-full' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/1587645/9cd50b3c93d14ea59ca73ebea052951e/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/34.jpg?token-hash=hjlaK0BEzxy4_KZV_1bfOKGZgmVxhtfA4TNMKzY1A0s%3D&token-time=1793750400" alt="" />
                    <div className="pfp absolute -bottom-14 left-[47%] ">
                        <img className='size-32 rounded-lg' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/1587645/d9742c972c4e4b319f6e823faddbee99/eyJoIjozNjAsInciOjM2MH0%3D/7.jpg?token-hash=BhfecQO2d4l1dM388PDYqtAuIVc-Hr1rMn9O74vlNwY%3D&token-time=1792195200" alt="" />
                    </div>
                </div>
            </div>
            <div className='container text-sm mt-16 mx-auto flex flex-col items-center gap-3'>
                <div className="title font-bold text-3xl">@{username}</div>
                <div className="bio">creating Soul Nurturing/Bahá'í Inspired Music, Videos and Collab</div>
                <div className="members text-slate-400">253 members . 126 posts</div>
                <div className="buttons flex flex-col gap-3">
                    <button className='bg-blue-800 p-2 px-6 rounded-lg hover:bg-blue-700'>Join for free</button>
                    <button className='bg-slate-800 p-2 px-6 rounded-lg hover:bg-slate-700'>See membership options</button>
                </div>
                <div className='mb-10'>
                    <Link href={"instagram.com"}>
                        <img className='size-6 cursor-pointer' src="/instagram.svg" alt="" />
                    </Link>
                </div>
                <Nav username={username} />
            </div>
            <div className="w-full h-0.5 bg-slate-700"></div>
            {children}

        </>
    )
}

export default CreatorLayout
