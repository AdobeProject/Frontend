import { configureStore } from '@reduxjs/toolkit'
import authSlice from './store/authSlice'
import mainSlice from './store/mainSlice'
import searchSlice from './store/searchSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        categoriesReducer: mainSlice,
        search: searchSlice,
    },
})