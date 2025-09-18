import { createSlice } from '@reduxjs/toolkit'

export const initialState = {
    id: null,
    name: '',
    author: '',
    errors: {},
    touched: {}
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        idChange: (state, action) => {
            state.id = action.payload.value
        },
        nameChange: (state, action) => {
            state.name = action.payload.value
        },
        authorChange: (state, action) => {
            state.author = action.payload.value
        },
        errorsChange: (state, action) => {
            state.errors = action.payload.errors
        },
        touchesChange: (state, action) => {
            state.touched = {
                    ...state.touched,
                    [action.payload.name]: true
                }
        },
        resetForm: () => initialState
    },
})


export const { idChange, nameChange, authorChange, errorsChange, touchesChange, resetForm } = booksSlice.actions

export default booksSlice.reducer