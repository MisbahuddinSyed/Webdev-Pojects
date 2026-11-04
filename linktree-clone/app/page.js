"use client"

import Image from "next/image";
import PhotoReel from "./components/PhotoReel";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const [handle, setHandle] = useState("")
  const router = useRouter();

  const redirect = () => {
    router.push(`/generate?handle=${handle}`)
  }

  return (
    <>
      <section className="relative overflow-hidden min-w-full bg-[#d2e823] grid grid-cols-2 gap-4">
        <div className="max-h-screen flex flex-col gap-8 justify-center items-center ml-36">
          <h1 className="font-extrabold text-8xl text-green-900">A link in bio built for you.</h1>
          <p className="font-medium text-lg text-green-900">Join 70M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles. </p>
          <div className="form flex gap-4 w-full" >
              <input value={handle} onChange={(e) => setHandle(e.target.value)} type="text" placeholder="bitr.ee/" className="w-1/2 bg-white px-4 py-6 rounded-lg "/>
              <button onClickCapture={()=>redirect()} className="w-1/2 bg-green-900 text-white font-medium px-20 py-6 rounded-full">Get started for free</button>
          </div>
        </div>
        <div className="max-h-screen photoreel flex justify-center">
          <PhotoReel />
        </div>
      </section>

      <section className="min-h-[80vh] min-w-full bg-blue-500">hellow</section>


    </>
  );
}
