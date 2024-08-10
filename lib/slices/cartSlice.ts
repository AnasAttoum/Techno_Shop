import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface payload {
    productId: number,
    quantity: number,
    price: number
}

const initialState: payload[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<payload>) => {
            const isExist = state.filter((product: payload) => {
                if (product.productId === action.payload.productId) {
                    return product
                }
            })

            if (isExist.length) {
                [...state.map((product: payload) => {
                    if (product.productId === action.payload.productId)
                        return product.quantity += action.payload.quantity
                    else
                        return product
                })]
            }
            else {
                state.push({ productId: action.payload.productId, quantity: action.payload.quantity, price: action.payload.price })
            }
        },

        removeFromCart: (state, action: PayloadAction<number>) => {
            return state.filter((product) => {
                return product.productId !== action.payload
            })
        },
        reset: () => {
            return []
        }
    }
})

export const { addToCart, removeFromCart, reset } = cartSlice.actions

export default cartSlice.reducer