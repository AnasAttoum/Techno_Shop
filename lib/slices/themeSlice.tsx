import { createSlice } from "@reduxjs/toolkit";

export interface Theme {
    mode: string
}

const initialState: Theme = {
    mode: 'dark'
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggle: (state) => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark'
        }
    }
})

export const { toggle } = themeSlice.actions

export default themeSlice.reducer