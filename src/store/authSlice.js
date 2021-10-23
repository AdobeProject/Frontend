import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
    authPending: false,
    authLogIn: false,
    authSuccess: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setPending: (store, action) => {
            return {
                ...store,
                authPending: action.payload
            }
        },
        setAuth: (store, action) => {
            return {
                ...store,
                authLogIn: action.payload
            }
        },
        setAuthSuccess: (store, action) => {
            return {
                ...store,
                authSuccess: action.payload
            }
        },
        setUser: (store, action) => {
            return {
                ...store,
                user: action.payload
            }
        },
    },
})

export const getUser = () => (dispatch) => {
    dispatch(setPending(true))

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            if (response) {
                dispatch(setUser(response.data))
                dispatch(setAuth(true))
                dispatch(setAuthSuccess(true))
                dispatch(setPending(false))
            } else {
                dispatch(setPending(false))
            }
        })
        .catch(err => err)
}

export const { setPending, setAuth, setAuthSuccess, setUser } = authSlice.actions

export default authSlice.reducer