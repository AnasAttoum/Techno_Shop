'use client'
import Spinner from "@/components/Spinner"
import { product } from "@/CONSTANTS/types"
import Image from "next/image"
import React, { useState } from "react"

export default function ImagesInProductPage({ product }: { product: product }) {

    const [loading, setLoading] = useState(true)
    const [loadingSubImages, setLoadingSubImages] = useState(product.images.map(() => { return true }))


    const [image, setImage] = useState(product.thumbnail)
    const changeImage = (img: string) => {
        setLoading(true)
        setImage(img)
    }


    return (
        <>
            {loading &&
                <div className="flex flex-col justify-center items-center gap-5">
                    <Spinner/>
                    <div style={{ color: 'var(--primary)' }}>Loading...</div>
                </div>
            }
            <div className="flex justify-center items-center my-5">
                <Image src={image}
                    width={450} height={450} alt={product.title} className="object-contain rounded-lg" onLoad={() => setLoading(false)} priority />
            </div>


            <div className="flex flex-wrap justify-center">
                <Image src={product.thumbnail} width={150} height={150} alt={product.title} onClick={() => changeImage(product.thumbnail)} />
                {product.images.map((img: string, index: number) => {
                    return (
                        <div key={index} className="relative">
                            {loadingSubImages[index] && <div className="flex justify-center items-end mt-5" style={{ marginTop: '10px' }}>
                            <Spinner/>
                            </div>}
                            <Image src={img} width={150} height={150} alt={product.title}
                                onLoad={() => {
                                    setLoadingSubImages((prev) =>
                                        prev.map((el, i) => {
                                            return i === index ? false : el
                                        }
                                        )
                                    )
                                }}
                                onClick={() => changeImage(img)} />
                        </div>
                    )
                })}
            </div>
        </>
    )
}