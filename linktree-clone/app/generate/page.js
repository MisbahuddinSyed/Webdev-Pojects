"use client"

import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'


const page = () => {


  const [links, setLinks] = useState([{ linkText: "", link: "" }])
  const [handle, setHandle] = useState('')
  const [pic, setPic] = useState("")

  const addLink = () => {
    setLinks((links) => [...links, { linkText: "", link: "" }])
  }

  const handleChange = (index, property, value) => {
    setLinks(

      links.map((item, i) => {
        if (i === index) {
          return { ...item, [property]: value }
        }
        return item;
      })
    )
  }

  const handleSubmit = async () => {
    const data = {
      handle: handle,
      links: links,
      pic: pic
    }

    const response = await axios.post("api/generate", data);
    console.log(response.data);
    if (response.data.success === true) {
      toast.success('Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }

  return (
    <>
      <ToastContainer
        position="top-right"
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

      <div className="w-screen grid grid-cols-2">
        <div className="add-links h-screen flex flex-col justify-center items-center gap-4">

          <h1 className='font-bold text-4xl'>Create your bit tree</h1>

          <h2 className='font-medium text-xl'>Claim your handle:</h2>
          <input value={handle} onChange={(e) => setHandle(e.target.value)} placeholder='Enter your handle' className='bg-gray-300 rounded-full p-4' type="text" />

          <h2 className='font-medium text-xl'>Add Links:</h2>

          {/* <div className="links flex gap-4">
            <input className='bg-gray-300 rounded-full p-4' placeholder='Enter Link Text' type="text" />
            <input className='bg-gray-300 rounded-full p-4' placeholder='Enter Link' type="text" />
          </div> */}
          {links.map((item, index) => (<div key={index} className="links flex gap-4">
            <input value={item.linkText} onChange={(e) => handleChange(index, "linkText", e.target.value)} className='bg-gray-300 rounded-full p-4' placeholder='Enter Link Text' type="text" />
            <input value={item.link} onChange={(e) => handleChange(index, "link", e.target.value)} className='bg-gray-300 rounded-full p-4' placeholder='Enter Link' type="text" />
          </div>
          ))}
          <button onClick={() => addLink()} className='bg-gray-900 px-6 py-4 text-white rounded-full'>Add Link +</button>

          <h2 className='font-medium text-xl'>Add picture and finalize</h2>
          <input value={pic} onChange={(e) => setPic(e.target.value)} className='bg-gray-300 rounded-full p-4 w-1/2' placeholder='Enter Picture Link' type="text" />

          <button onClick={() => handleSubmit()} className='bg-gray-900 px-6 py-4 text-white rounded-full mt-4'>Claim your bit-tree</button>

        </div>
        <img className='h-screen w-full' src="https://linktr.ee/universal-login/assets/banner-signup-desktop.eaeeeb085d7eb098.webp" alt="" />


      </div>
    </>
  )
}

export default page
