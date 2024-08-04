'use client'

import { product } from "@/CONSTANTS/types";
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/cardProducts.module.css'
import { useState } from "react";

export default function CardProduct({ product }: { product: product }) {

    const [copy, setCopy] = useState(false)

    const copyPath = (e: React.SyntheticEvent) => {
        setCopy(true)
        e.preventDefault();
        navigator.clipboard.writeText('techno-shop-24.vercel.app/products/' + product.id);
        setTimeout(()=>{
            setCopy(false)
        },2000)
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
                    <div className="bg-white rounded-full p-1">
                        <svg className={styles.svg1} xmlns="http://www.w3.org/2000/svg" width="3vw" height="3vw" viewBox="0 0 32 32"><path fill="#3b82f6" d="M4 7c-.55 0-1 .45-1 1s.45 1 1 1h2.219l2.625 10.5c.222.89 1.02 1.5 1.937 1.5H23.25c.902 0 1.668-.598 1.906-1.469L27.75 10h-2.094l-2.406 9H10.781L8.156 8.5A1.983 1.983 0 0 0 6.22 7zm18 14c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m-9 0c-1.645 0-3 1.355-3 3s1.355 3 3 3s3-1.355 3-3s-1.355-3-3-3m3-14v3h-3v2h3v3h2v-3h3v-2h-3V7zm-3 16c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1m9 0c.563 0 1 .438 1 1c0 .563-.438 1-1 1c-.563 0-1-.438-1-1c0-.563.438-1 1-1" /></svg>
                    </div>
                    <div className="rounded-full p-2" style={{ backgroundColor: 'var(--primary)' }} onClick={copyPath}>
                        {!copy ?
                            <svg className={styles.svg2} xmlns="http://www.w3.org/2000/svg" width="2.5vw" height="2.5vw" viewBox="0 0 24 24"><g fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.5"><path d="M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1"/><path d="M3 10v6a3 3 0 0 0 3 3M18 5a3 3 0 0 0-3-3h-4C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6"/></g></svg>
                            : <h3 className={`text-white text-center ${styles.h3}`} style={{ fontSize: '.9vw' }}>Copied !</h3>
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}
