import React from 'react'

const about = async({params})=> {
        const {username} = await params

  return (
    <div>
      Hi {username}' iam about
    </div>
  )
}

export default about
