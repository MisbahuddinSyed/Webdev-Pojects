"use server"

import React from 'react'
import clientPromise from '@/lib/mongodb'
import { connection } from 'next/server'
import Link from 'next/link'
import { notFound } from 'next/navigation'

const Profile = async ({ params }) => {
    await connection();

    const { handle } = await params;


    const client = await clientPromise;

    const db = client.db('bittree');

    const collection = db.collection('links');

    const user = await collection.findOne({ handle: handle });
    if(!user){
        return notFound();
    }

    console.log(user);


    return (
        <div className='my-28 flex flex-col gap-10 justify-center items-center '>
            <div className="pic size-32"><img src={user.pic} alt="" /></div>
            <div className='font-bold text-xl'>@{user.handle}</div>

            {user.links.map((item, index)=>{

               return <Link key={index} href={`https://${item.link}`}><div  className='font-medium border-2 border-black px-28 py-4 text-xl'>{item.linkText}</div></Link>
                
            })}
        </div>
    )
}

export default Profile
