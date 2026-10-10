"use client"
import React from 'react'
import { useUser} from './UserProvider'
import { useEffect } from 'react'

const Home = ()=> {
    
    useEffect(() => {
      document.title = `${user.name}`
    }, [])
    

  const user = useUser()

        return (
        <>
            <div>Hi i am {user.name}</div>
        </>
    )}

export default Home

