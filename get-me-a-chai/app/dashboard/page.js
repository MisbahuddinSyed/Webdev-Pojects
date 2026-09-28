"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'



const Dashboard = () => {

    const { data: session, status } = useSession()
    const router = useRouter()
    

    if (!session) {
        return null
    }

    return (
        <div className='container mx-auto flex flex-col items-center gap-14 mt-20'>
            <h2 className="title text-3xl font-bold">
                Welcome Back {session.user.name} !
            </h2>
        </div>
    )
}

export default Dashboard
