"use client"
import React from 'react'
import { useUser } from '../UserProvider'

const Chat = ()=> {
  const user = useUser()

        return (
        <>
            <div>Hi i am {user.name}</div>
        </>
    )}

export default Chat