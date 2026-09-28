"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'



const Login = () => {
    const router = useRouter()

    const { data: session} = useSession()

   

    
    if(session){
        router.push("/dashboard")
    }

    return (
        <div className='container mx-auto flex flex-col items-center gap-14 mt-20'>
            <h2 className="title text-3xl font-bold">
                Login to let your fans support you
            </h2>
            <div className="flex-1 m-6">

                <div className="flex flex-wrap gap-10 justify-center">
                    <button onClick={() => signIn()} className="w-xl h-16 cursor-pointer bg-black rounded-lg text-white text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-github"></i> <img src="/github.svg" className='w-11 invert' alt="" /><div className="mx-auto">Github</div></button>
                    <button className="w-xl h-16 cursor-pointer bg-blue-700 rounded-lg text-white text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-facebook mr-1"></i><img src="/facebook.svg" className='w-11' alt="" /> <div className="mx-auto">Facebook</div></button>
                    <button className="w-xl h-16 cursor-pointer bg-red-700 rounded-lg text-white text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-youtube mr-1"></i><img src="/google.svg" className='w-11' alt="" /> <div className="mx-auto">Youtube</div></button>
                    <button className="w-xl h-16 cursor-pointer bg-red-500 rounded-lg text-white text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-laravel mr-1"></i><img src="/google.svg" className='w-11' alt="" /> <div className="mx-auto">Google</div></button>
                    <button className="w-xl h-16 cursor-pointer bg-green-200 text-green-800 rounded-lg text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-vuejs mr-1"></i><img src="/github.svg" className='w-11' alt="" /> <div className="mx-auto">LarvelJS</div></button>
                </div>
            </div>

        </div>
    )
}

export default Login
