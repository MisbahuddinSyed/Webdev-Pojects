
import React from 'react'
import dbConnect from '@/lib/mongoose'
import Users from '@/models/Users'
import { UserProvider } from './UserProvider'
import CreatorLayout from './CreatorLayout'



const Layout = async ({ children, params }) => {
    const { username } = await params

    try {
        await dbConnect();

        const user = JSON.parse(
            JSON.stringify(
                await Users.findOne({ username }).lean()
            )
        )

        if (!user) {
            return <div className='container text-center font-bold text-6xl m-auto mt-28'>User not found !</div>

        }
        return (
            <>
                <UserProvider user={user}>
                    <CreatorLayout/>
                    {children}
                </UserProvider>
            </>
        )

    } catch (err) {
        console.log(err)
    }



}

export default Layout


