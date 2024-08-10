'use client'
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import Title from "@/components/Title";
import styles from '@/styles/cart.module.css'
import { getProduct } from "@/api/api";
import { product } from "@/CONSTANTS/types";
import Image from "next/image";
import { addToCart, removeFromCart } from "@/lib/slices/cartSlice";
import { WhiteBorderTextField } from "@/components/WhiteBorderTextField";
import Button from "@/components/Button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cart() {

    const cart = useSelector((state: RootState) => state.persistedReducer.cart)
    const dispatch = useDispatch()
    const [total, setTotal] = useState(0)

    const removeProduct = (id: number) => {
        dispatch(removeFromCart(id))
    }

    useEffect(() => {
        setTotal(0)
        cart.forEach(async (element) => {
            setTotal(prev => prev + (element.quantity * element.price))
        })
        // eslint-disable-next-line
    }, [])


    return (
        <>
            <Title title='Cart' />
            {cart.length === 0 ?
                <div className={`flex flex-col justify-center items-center contain ${styles.container}`}>
                    <div style={{ fontSize: '3vw' }}>No Products Here Yet</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="5vw" height="5vw" viewBox="0 0 24 24"><path fill="#3b82f6" fillOpacity="0" d="M17 14V17a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V14z"><animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3" /></path><g fill="none" stroke="#3b82f6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.1"><path strokeDasharray="48" strokeDashoffset="48" d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0" /></path><path strokeDasharray="14" strokeDashoffset="14" d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;28" /></path></g><mask id="lineMdCoffeeHalfEmptyTwotoneLoop0"><path fill="none" stroke="#fff" strokeWidth="1.1" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"><animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite" /></path></mask><rect width="24" height="0" y="7" fill="#3b82f6" mask="url(#lineMdCoffeeHalfEmptyTwotoneLoop0)"><animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2" /><animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5" /></rect></svg>
                </div>
                : <>
                    <div className={`${styles.table} flex flex-col gap-16`} style={{ marginTop: '50px' }}>
                        <div className="flex justify-between text-center" style={{ color: 'var(--primary)', fontWeight: '700' }}>
                            <div style={{ width: '15%' }}>product</div>
                            <div style={{ width: '30%' }}>Title</div>
                            <div style={{ width: '15%' }}>Price</div>
                            <div style={{ width: '15%' }}>Quantity</div>
                            <div style={{ width: '15%' }}>Total</div>
                            <div style={{ width: '10%' }}>Remove</div>
                        </div>
                        {cart.map(async (element, index) => {
                            const product: product = await getProduct(element.productId)

                            return <div key={index} className="flex justify-between items-center text-center" style={{ borderBottom: '1px solid #555' }}>
                                <div className="relative" style={{ width: '15%', height: '200px' }}>
                                    <Image src={product.thumbnail} alt={product.title} fill className="object-contain" />
                                </div>
                                <div style={{ width: '30%' }}>{product.title}</div>
                                <div style={{ width: '15%' }}>{product.price} $</div>
                                <div style={{ width: '15%' }}>
                                    <div className="flex justify-center items-center gap-5">
                                        <svg style={{ cursor: 'pointer' }} onClick={() => { dispatch(addToCart({ productId: element.productId, quantity: -1, price: product.price })) }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#3b82f6" d="M18 16H6c-1.654 0-3-1.346-3-3s1.346-3 3-3h12c1.654 0 3 1.346 3 3s-1.346 3-3 3M6 12c-.551 0-1 .449-1 1s.449 1 1 1h12c.551 0 1-.449 1-1s-.449-1-1-1z" /></svg>
                                        {element.quantity}
                                        <svg style={{ cursor: 'pointer' }} onClick={() => { dispatch(addToCart({ productId: element.productId, quantity: 1, price: product.price })) }} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="#3b82f6" d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-4H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4zm4 0h-2v5a1 1 0 0 1-1 1H5v2h5a1 1 0 0 1 1 1v5h2v-5a1 1 0 0 1 1-1h5v-2h-5a1 1 0 0 1-1-1z" /></g></svg>
                                    </div>
                                </div>
                                <div style={{ width: '15%' }}>{product.price * element.quantity} $</div>
                                <div style={{ width: '10%' }} className="flex justify-center" onClick={() => removeProduct(element.productId)}>
                                    <svg style={{ cursor: 'pointer' }} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><g fill="none" stroke="#3b82f6" strokeDasharray="22" strokeDashoffset="22" strokeLinecap="round" strokeWidth="1.1"><path d="M19 5L5 19"><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="22;0" /></path><path d="M5 5L19 19"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="22;0" /></path></g></svg>
                                </div>
                            </div>
                        })}
                    </div>


                    <div className={`${styles.details} flex justify-between mt-20 my-5`}>
                        <div className="flex flex-col gap-5">
                            <div style={{ color: 'var(--primary)', fontWeight: '700' }}>Coupon</div>
                            <div>Enter your coupon code if you have one.</div>
                            <div className="flex gap-5">
                                <WhiteBorderTextField />
                                <Button title="Apply Coupon" func={() => { }} />
                            </div>
                        </div>

                        <div className="flex flex-col justify-between">
                            <div style={{ color: 'var(--primary)', fontWeight: '700' }}>Cart Totals</div>
                            <div className="flex justify-between">
                                <div>Total: </div>
                                <div>{total.toFixed(2)} $</div>
                            </div>
                            <Link href={'/checkout'} target="_blank">
                                <div className="flex justify-end mt-5">
                                    <Button title="Proceed To Checkout" func={() => {}} />
                                </div>
                            </Link>
                        </div>

                    </div>
                </>
            }
        </>
    )
}
