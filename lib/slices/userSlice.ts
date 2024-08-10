import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    userName:string
}

const initialState: User = {
    userName:''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logInData: (state, action: PayloadAction<string>) => {
            state.userName = action.payload
        },
        logOut: (state) => {
            state.userName = ''
        }
    }
})

export const { logInData,logOut } = userSlice.actions

export default userSlice.reducer