"use client"

import { createContext, useContext } from 'react'

const context = createContext();

export function UserProvider({ user, children }) {


    return (
        <context.Provider value={user}>
            {children}
        </context.Provider>
    )
}

export function useUser() {
    return useContext(context)
}


