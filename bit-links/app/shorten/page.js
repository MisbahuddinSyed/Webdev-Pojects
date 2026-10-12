"use client"

import React from 'react'
import localFont from 'next/font/local';
import { useState } from 'react';
import axios from "axios";
import Link from 'next/link';

const medPoppins = localFont({
  src: '../fonts/Poppins-Medium.ttf',
  variable: '--font-boldPoppins',
  weight: '100 900'
});

const boldPoppins = localFont({
  src: '../fonts/Poppins-Bold.ttf',
  variable: '--font-boldPoppins',
  weight: '100 900'
});

const page = () => {

    const [url, setUrl] = useState('')
    const [shortUrl, setShortUrl] = useState('')
    const [success, setSuccess] = useState(false)
    const [generated, setGenerated] = useState('')
     
    const handleSubmit = async(e) => {
        e.preventDefault();

      const data = {
        url: url,
        shortUrl: shortUrl
      }
      setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shortUrl}`)
     const res = await axios.post("/api/url/", data);
      if(res.data.success === true){
        setSuccess(true);
        setUrl('');
        setShortUrl('')
      }
    }
    

  return (
    <div className='flex flex-col justify-center items-center h-[800px] w-full'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center bg-green-50 px-8 pt-6 pb-6' action="submit">
        <div className='flex flex-col gap-4 m-16 text-4xl'>
        <label  className={`${medPoppins.className}`} htmlFor="url">URL</label>
        <input value={url} onChange={(e) => setUrl(e.target.value)} className='px-2.5 bg-white' type="text" placeholder='Enter URL' />
        </div>
        <div className='flex flex-col gap-4 m-16 text-4xl'>
        <label className={ `${medPoppins.className}`}  htmlFor="shorturl">Short URL</label>
        <input value={shortUrl} onChange={(e) => setShortUrl(e.target.value)} className='px-2.5 bg-white' type="text" placeholder='Enter short Url' />
        
        </div>
        <div>
            <button className='p-2 px-6 bg-green-600 text-white mb-16 font-bold hover:bg-green-300'>Shorten</button>
        </div>
      </form>
      {success === true &&<> <div className={`${boldPoppins.className} text-green-600 text-2xl mt-5`}>URL shortened suceessfully!</div><Link href={`${generated}`}><code>{generated}</code></Link></>}
    </div>
  )
}

export default page
