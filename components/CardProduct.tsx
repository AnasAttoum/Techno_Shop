'use client'

import { product } from "@/CONSTANTS/types";
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/cardProducts.module.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/slices/cartSlice";
import { RootState } from "@/lib/store";

export default function CardProduct({ product }: { product: product }) {

    const [copy, setCopy] = useState(false)
    const [cart, setCart] = useState(false)
    const dispatch = useDispatch()
    const isLogIn = useSelector((state: RootState) => state.persistedReducer.user.userName) !== ''

    const addCart = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setCart(true)
        setTimeout(() => {
            setCart(false)
        }, 2000)
        dispatch(addToCart({ productId: product.id, quantity: 1,price:product.price }))
    }

    const copyPath = (e: React.SyntheticEvent) => {
        e.preventDefault();
        setCopy(true)
        navigator.clipboard.writeText('techno-shop-24.vercel.app/products/' + product.id);
        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }

    return (
        <Link href={`/products/${product.id}`} className={`${styles.container} flex flex-col bg-blue-50 p-5 rounded-xl relative`} style={{ width: '18.5vw', border: '1px solid var(--primary)' }}>
            <div className="relative">
                <Image src={product.thumbnail}
                    width={350} height={150} alt={product.title} className="object-cover rounded-lg" />
                <h3 className={`absolute bottom-0 -left-5 px-5 font-bold ${styles.price}`} style={{ backgroundColor: 'var(--primary)', color: 'white', fontSize: '.9vw' }}>{product.price} $</h3>
            </div>
            <h1 className={`text-gray-950 text-center my-3 ${styles.h1}`} style={{ fontSize: '1.3vw' }}>{product.title}</h1>
            <h3 className={`text-gray-950 text-center ${styles.h3}`} style={{ fontSize: '.9vw', display: '-webkit-box', WebkitLineClamp: '3', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{product.description}</h3>

            <div className={styles.overlay}>
                <h1 className={` text-center my-3 ${styles.h1}`} style={{ fontSize: '1.3vw' }}>{product.title}</h1>
                <h1 className={`text-center font-bold ${styles.h1}`} style={{ fontSize: '.1.3vw' }}>{product.price} $</h1>
                <div className="flex justify-center items-center gap-5">
                    {isLogIn &&
                        <div className="bg-white rounded-full p-2" onClick={addCart}>
                            {!cart ?
                                <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg1} width="2.5vw" height="2.5vw" viewBox="0 0 14 14"><path fill="none" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round" d="M10.946 13.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m5.158-7h-3m1.5-1.5v3M.5.5H3L3.263 3m0 0l.643 6.105A1 1 0 0 0 4.9 10h6.32a1 1 0 0 0 .97-.757l1.25-5A1 1 0 0 0 12.47 3z" /></svg>
                                : <svg xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 14 14"><g fill="none" stroke="var(--primary)" strokeLinecap="round" strokeLinejoin="round"><path d="M10.946 13.5a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1m-6.5 0a.5.5 0 1 1 0-1a.5.5 0 0 1 0 1M.5.5H3L3.263 3m0 0l.643 6.105A1 1 0 0 0 4.9 10h6.32a1 1 0 0 0 .97-.757l1.25-5A1 1 0 0 0 12.47 3z" /><path d="m6.42 6.75l1.333 1l2.188-2.5" /></g></svg>
                            }
                        </div>
                    }
                    <div className="rounded-full p-2" style={{ backgroundColor: 'var(--primary)' }} onClick={copyPath}>
                        {!copy ?
                            <svg className={styles.svg2} xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 24 24"><g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"><path d="M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1" /><path d="M3 10v6a3 3 0 0 0 3 3M18 5a3 3 0 0 0-3-3h-4C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6" /></g></svg>
                            : <h3 className={`text-white text-center ${styles.h3}`} style={{ fontSize: '.9vw' }}>Copied !</h3>
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}
