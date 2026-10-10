"use client"
import React from 'react'
import { useUser } from '../UserProvider'

const About = ()=> {
  const user = useUser()

        return (
        <>
            <div>Hi i am {user.name}</div>
        </>
    )}

export default About