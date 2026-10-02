import React from 'react'

const chat = async({params}) => {
    const {username} = await params
  return (
    <div>
      Hi i am {username}'s chat
    </div>
  )
}

export default chat
