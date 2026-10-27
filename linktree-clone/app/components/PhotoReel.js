import React from 'react'

const photos = [
    "/photoreel/pic1.jpg",
    "/photoreel/pic2.jpg",
    "/photoreel/pic3.jpg",
    "/photoreel/pic4.jpg"
]

const PhotoReel = () => {

    const repeatPhotos = [...photos, ...photos]

  return (
    <div className='animate-scroll-up w-4/5 flex flex-col gap-10'>
      {repeatPhotos.map((photo, index) => (
        <img src={photo} key={index} className='h-96 w-full shrink-0 rounded-2xl object-cover' alt="" />
      ))}

    </div>
  )
}

export default PhotoReel
