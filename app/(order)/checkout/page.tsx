'use client'

import Title from "@/components/Title"
import { RootState } from "@/lib/store"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import * as React from 'react';

import { WhiteBorderTextField } from "@/components/WhiteBorderTextField"
import styles from '@/styles/checkout.module.css'
import Button from "@/components/Button"
import { getProduct } from "@/api/api"
import SelectCountry from "@/components/SelectCountry"
import { product } from "@/CONSTANTS/types"

export default function Checkout() {


    const [total, setTotal] = React.useState(0)

    const cart = useSelector((state: RootState) => state.persistedReducer.cart)
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        if (cart.length === 0)
            router.push('/cart')
    }, [cart.length, router])


    useEffect(() => {
        setTotal(0)
        cart.forEach(async (element) => {
            setTotal(prev => prev + (element.quantity * element.price))
        })
        // eslint-disable-next-line
    }, [])

    return (
        <>
            <Title title="Checkout" />
            <div className={` ${styles.container} flex justify-between`}>

                <div style={{ width: '45%' }}>
                    <div className="mb-5 mt-16" style={{ fontSize: '25px', textAlign: 'center' }}>Billing Details</div>
                    <div className="flex flex-col justify-center items-center rounded-lg p-5 gap-5" style={{ border: '1px solid var(--primary)' }}>
                        <SelectCountry />
                        <WhiteBorderTextField fullWidth label="Address" id="fullWidth" />
                        <div className="flex gap-16">
                            <WhiteBorderTextField label="State" id="fullWidth" />
                            <WhiteBorderTextField label="ZIP Code" id="fullWidth" />
                        </div>
                        <WhiteBorderTextField fullWidth label="Phone" id="fullWidth" />
                        <WhiteBorderTextField fullWidth label="Order Notes" multiline rows={5} id="fullWidth" />
                        <button className={`${styles.btn} flex gap-3 rounded-md`} onClick={()=>{router.push('/thanks')}}>Order Now
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="white" fillRule="evenodd"
                                    d="M5.796 18.204L21.512 2.488c-.988-.989-2.86-.364-6.606.884l-9.331 3.11c-2.082.694-3.123 1.041-3.439 1.804q-.112.271-.133.564c-.059.824.717 1.6 2.269 3.151l.283.283c.254.254.382.382.478.523c.19.28.297.607.31.945c.008.171-.019.35-.072.705c-.196 1.304-.294 1.956-.179 2.458c.114.495.362.938.704 1.289"
                                    clipRule="evenodd" />
                                <path fill="white"
                                    d="m17.498 18.486l3.13-9.392c1.25-3.745 1.873-5.617.885-6.606L5.797 18.204c.348.356.794.617 1.296.74c.5.122 1.153.033 2.46-.144l.071-.01c.369-.05.553-.075.73-.064c.32.02.63.124.898.303c.147.099.278.23.541.493l.251.251c1.51 1.51 2.266 2.265 3.067 2.226c.22-.01.438-.062.64-.151c.734-.323 1.072-1.336 1.747-3.362"
                                    opacity="0.5" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div style={{ width: '45%' }}>
                    <div className="flex flex-col gap-5 mb-5 mt-16">
                        <div style={{ fontSize: '25px', textAlign: 'center' }}>Coupon</div>
                        <div className="flex flex-col items-center rounded-lg p-5" style={{ border: '1px solid var(--primary)' }}>
                            <div>Enter your coupon code if you have one.</div>
                            <div className="flex mt-5 gap-5">
                                <WhiteBorderTextField />
                                <Button title="Apply Coupon" func={() => {}} />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 mt-16" style={{ fontSize: '25px', textAlign: 'center' }}>Your Order</div>
                    <div className="rounded-lg p-5" style={{ border: '1px solid var(--primary)' }}>
                        <div className="flex justify-between mb-5 p-5" style={{ borderBottom: '3px solid #666' }}>
                            <div>Product</div>
                            <div>Total</div>
                        </div>

                        <div className="flex flex-col justify-center gap-5">
                            {cart.map(async (element, index) => {
                                const product:product = await getProduct(element.productId)
                                return <div key={index} className="flex justify-between">
                                    <div><span style={{ fontSize: '14px' }}>{product.title}</span> <span style={{ fontWeight: '800' }}>X {element.quantity}</span></div>
                                    <div>{product.price * element.quantity} $</div>
                                </div>
                            })}
                            <div className="flex justify-between my-5" style={{fontWeight:'700'}}>
                                <div>Total: </div>
                                <div>{total.toFixed(2)} $</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}