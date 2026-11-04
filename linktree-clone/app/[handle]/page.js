import React from 'react'
import { Suspense } from 'react'
import Profile from './profile'

const page = async ({ params }) => {
  return (
    <Suspense fallback={<div>Loading Page...</div>}>
        <Profile params={params} />
    </Suspense>
  )
}

export default page
