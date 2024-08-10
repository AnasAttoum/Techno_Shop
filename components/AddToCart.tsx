'use client'
import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { addToCart } from "@/lib/slices/cartSlice";
import { RootState } from "@/lib/store";

export default function AddToCart({ id, price }: { id: number, price: number }) {

    const dispatch = useDispatch()
    const isLogIn = useSelector((state: RootState) => state.persistedReducer.user.userName) !== ''

    const addCart = () => {
        dispatch(addToCart({ productId: id, quantity: 1, price: price }))
    }

    return (
        <>
            {isLogIn &&
                <Button title="Add To Cart" func={addCart} />
            }
        </>
    )
}
