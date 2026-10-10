"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';


const Dashboard = () => {

    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push('/login')
        }
    }, [status])



    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [coverURL, setCoverURL] = useState('')
    const [emailError, setEmailError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const user = await axios.post('/api/user/check-email', { email })
            if (user.data.exists) {
                setEmailError('User already exists!')
                return
            }


        } catch (error) {
            console.log(error)
        }

        try {
            const res = await axios.post('/api/user', {
                name,
                username,
                email,
                imgURL,
                coverURL
            }
            )
            if (res.data.success === true) {
                toast('User Created successfully', {
                    position: "bottom-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });

                setName('')
                setUsername('')
                setImgURL('')
                setCoverURL('')
                setEmail('')
            }
        }

        catch (err) {
            console.log(err)
            toast('Failed to create new User', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
        }

    }
    if (session) {


        return (
            <>
                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"

                />
                <div className="flex justify-center">
                    <form onSubmit={handleSubmit} id="profileForm" method="POST"
                        className="w-full max-w-lg bg-white rounded-xl shadow-sm ring-1 ring-slate-200 overflow-hidden">

                        <div className="relative">
                            <div id="coverPreview" className="h-32 bg-slate-200 bg-cover bg-center"></div>
                            <img id="avatarPreview" alt=""
                                className="hidden absolute -bottom-10 left-6 h-20 w-20 rounded-full object-cover ring-4 ring-white bg-slate-300" />
                            <div id="avatarPlaceholder"
                                className="absolute -bottom-10 left-6 h-20 w-20 rounded-full ring-4 ring-white bg-slate-300"></div>
                        </div>

                        <div className="px-6 pt-14 pb-6 space-y-5">
                            <div>
                                <h1 className="text-xl font-semibold text-slate-900">Create your profile</h1>
                                <p className="mt-1 text-sm text-slate-500">Add your details and image links. Previews update as you type.</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700">Full name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} type="text" id="fullName" name="fullName" required autoComplete="name"
                                    placeholder="Misbah Uddin"
                                    className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700">Username</label>
                                <div className="mt-1 flex rounded-lg border border-slate-300 focus-within:border-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600/30">
                                    <span className="inline-flex items-center pl-3 text-slate-400 select-none">@</span>
                                    <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" id="username" name="username" required minLength="3" pattern="[A-Za-z0-9_\.]+"
                                        autoComplete="username" placeholder="misbah"
                                        className="block w-full rounded-r-lg bg-transparent px-2 py-2 text-slate-900 placeholder-slate-400 focus:outline-none" />
                                </div>
                                <p className="mt-1 text-xs text-slate-500">Letters, numbers, underscores and dots only.</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700">Email</label>
                                <input value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                    setEmailError('')
                                }}
                                    type="email" id="email" name="email" required autoComplete="email"
                                    placeholder="you@example.com"
                                    className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30" />
                                {emailError && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {emailError}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700">Profile image URL</label>
                                <input value={imgURL} onChange={(e) => setImgURL(e.target.value)} type="url" id="profileImage" name="profileImage" placeholder="https://example.com/avatar.jpg"
                                    className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700">Cover image URL</label>
                                <input value={coverURL} onChange={(e) => setCoverURL(e.target.value)} type="url" id="coverImage" name="coverImage" placeholder="https://example.com/cover.jpg"
                                    className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-600/30" />
                            </div>

                            <button type="submit"
                                className="w-full rounded-lg bg-indigo-600 px-4 py-2.5 font-medium text-white hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 transition-colors">
                                Create profile
                            </button>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}

export default Dashboard