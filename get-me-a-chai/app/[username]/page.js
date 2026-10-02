import React from 'react'

const home = async({params})=> {
        const {username} = await params

  return (
    <div>
      Hi iam {username}' home!
    </div>
  )
}

export default home

