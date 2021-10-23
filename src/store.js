import { configureStore } from '@reduxjs/toolkit'
import mainSlice from './store/mainSlice'
import authSlice from './store/authSlice'
import searchSlice from './store/searchSlice'


export const store = configureStore({
    reducer: {
        categoriesReducer: mainSlice,
        auth: authSlice,
        search: searchSlice
    },
})