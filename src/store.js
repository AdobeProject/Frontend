import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './store/mainSlice'
import authSlice from './store/authSlice'

export const store = configureStore({
    reducer: {
        categoriesReducer: mainSlice,
        auth: authSlice
    },
})