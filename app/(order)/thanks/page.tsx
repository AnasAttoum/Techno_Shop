'use client'
import { reset } from '@/lib/slices/cartSlice'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function Thanks() {

    const dispatch=useDispatch()

    useEffect(() => {
            dispatch(reset())
        // eslint-disable-next-line
    }, [])
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <Image src={'techno_shop.svg'} alt='LOGO' width={200} height={200} />
            <div style={{ color: 'var(--primary)', fontSize: '5.5vw' }}>Thank you!</div>
            <div style={{ fontSize: '2.8vw' }}>Your order was successfuly completed.</div>
        </div>
    )
}
