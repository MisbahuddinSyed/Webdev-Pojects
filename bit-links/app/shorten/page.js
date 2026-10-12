"use client"

import React from 'react'
import localFont from 'next/font/local';
import { useState } from 'react';
import axios from "axios";

const medPoppins = localFont({
  src: '../fonts/Poppins-Medium.ttf',
  variable: '--font-boldPoppins',
  weight: '100 900'
});

const page = () => {

    const [url, setUrl] = useState('')
    const [shorturl, setShorturl] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault();

      const data = {
        url: url,
        shorturl: shorturl
      }

      const res = axios.post("/api/url/", data);
      console.log(res.data);
    }
    

  return (
    <div className='flex justify-center items-center h-[800px] w-full'>
      <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center bg-green-50 px-8 pt-6 pb-6' action="submit">
        <div className='flex flex-col gap-4 m-16 text-4xl'>
        <label  className={`${medPoppins.className}`} htmlFor="url">URL</label>
        <input value={url} onChange={(e) => setUrl(e.target.value)} className='px-2.5 bg-white' type="text" placeholder='Enter URL' />
        </div>
        <div className='flex flex-col gap-4 m-16 text-4xl'>
        <label className={ `${medPoppins.className}`}  htmlFor="shorturl">Short URL</label>
        <input value={shorturl} onChange={(e) => setShorturl(e.target.value)} className='px-2.5 bg-white' type="text" placeholder='Enter short Url' />
        </div>
        <div>
            <button className='p-2 px-6 bg-green-600 text-white mb-16 font-bold hover:bg-green-300'>Shorten</button>
        </div>
      </form>
    </div>
  )
}

export default page
