import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './slices/bookSlice'
import userReducer from './slices/userSlice'

export const store = configureStore({
  reducer: {
    books: booksReducer,
    users: userReducer
  },
})