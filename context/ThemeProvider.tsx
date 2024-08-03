'use client'
import React, { createContext, useState } from "react"

export type ThemeContextType = { mode: string; toggle: () => void; }
export const Context = createContext<ThemeContextType | null>(null)

export default function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [mode, setMode] = useState('dark')

    const toggle = () => { setMode(prev => (prev === 'dark' ? 'light' : 'dark')) }

    return (
        <Context.Provider value={{mode,toggle}}>
            <div className={`theme ${mode}`}>
            {children}
            </div>
        </Context.Provider>
    )
}
