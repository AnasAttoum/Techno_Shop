'use client'
import { RootState } from "@/lib/store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useSelector } from "react-redux"

export default function JoinUs() {
    const router = useRouter()
    const logged = useSelector((state: RootState) => state.persistedReducer.user.userName) !== ''

    useEffect(() => {
        if (logged)
            router.push('/')
    }, [logged,router])
    return (
        <>
        </>
    )
}