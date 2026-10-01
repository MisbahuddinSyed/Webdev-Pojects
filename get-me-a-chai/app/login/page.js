"use client"

import React from 'react'
import { doSocialLogin } from '../actions'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const Login = () => {

    const [error, seterror] = useState("")
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const response = await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirect: false
        })
        if (response?.error) {
            seterror("Wrong email or password")
            return;
        }
        if (!response.error) {
            router.push('/dashboard')
        }
    }

    return (
        <div className='container mx-auto flex flex-col items-center gap-14 mt-20'>
            <h2 className="title text-3xl font-bold">
                Login to let your fans support you
            </h2>

            <div className="credentials">
                {error && (
                    <p className="text-red-500">
                        {error}
                    </p>
                )}
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2.5 text-sm font-medium text-heading">Your email</label>
                        <input name='email' type="email" id="email" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="name@flowbite.com" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Your password</label>
                        <input name='password' type="password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="••••••••" required />
                    </div>
                    <label htmlFor="remember" className="flex items-center mb-5">
                        <input name='checkbox' id="remember" type="checkbox" value="" className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" required />
                        <p className="ms-2 text-sm font-medium text-heading select-none">I agree with the <a href="#" className="text-fg-brand hover:underline">terms and conditions</a>.</p>
                    </label>
                    <button type="submit" className="rounded-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5">Submit</button>
                </form>

            </div>

            <div className="flex-1 m-6">

                <div className="flex flex-wrap gap-10 justify-center">
                    <form action={doSocialLogin}> <button type='submit' name='action' value='github' className="w-xl h-16 cursor-pointer bg-black rounded-lg text-white text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-github"></i> <img src="/github.svg" className='w-11 invert' alt="" /><div className="mx-auto">Github</div></button></form>

                    <form action={doSocialLogin}> <button type='submit' name='action' value='facebook' className="w-xl h-16 cursor-pointer bg-blue-700 rounded-lg text-white text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-facebook mr-1"></i><img src="/facebook.svg" className='w-11' alt="" /> <div className="mx-auto">Facebook</div></button></form>

                    <form action={doSocialLogin}> <button type='submit' name='action' value='youtube' className="w-xl h-16 cursor-pointer bg-red-700 rounded-lg text-white text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-youtube mr-1"></i><img src="/google.svg" className='w-11' alt="" /> <div className="mx-auto">Youtube</div></button></form>

                    <form action={doSocialLogin}> <button type='submit' name='action' value='google' className="w-xl h-16 cursor-pointer bg-red-500 rounded-lg text-white text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-laravel mr-1"></i><img src="/google.svg" className='w-11' alt="" /> <div className="mx-auto">Google</div></button></form>

                    <form action={doSocialLogin}> <button type='submit' name='action' value='larveljs' className="w-xl h-16 cursor-pointer bg-green-200 text-green-800 rounded-lg text-xl text-center self-center px-3 py-2 my-2 mx-2 flex items-center"><i className="fab fa-vuejs mr-1"></i><img src="/github.svg" className='w-11' alt="" /> <div className="mx-auto">LarvelJS</div></button></form>
                </div>
            </div>

        </div>
    )
}

export default Login
