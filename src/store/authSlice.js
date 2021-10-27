import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const URL = 'http://192.168.88.244:8080'

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
export const signInUser = (userData) => (dispatch) => {
    dispatch(setPending(true))

    axios.post(`${URL}/user/login`, userData)
        .then((response) => {
            if (response) {
                localStorage.setItem('userToken', response.data.token)
                dispatch(setUser(response.data.userDetails))
                dispatch(setAuth(true))
                dispatch(setAuthSuccess(true))
                dispatch(setPending(false))
            } else {
                dispatch(setPending(false))
            }
        })
        .catch(err => err)
}

export const registerUser = (userData) => (dispatch) => {
    dispatch(setPending(true))
    axios.post(`${URL}/user/signup`, userData)
        .then((response) => {
            if (response) {
                localStorage.setItem('userToken', response.data.token)
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

// export const authentication = () => (dispatch) => {
//     dispatch(setPending(true))
//     axios.get(`${URL}/user/signup`, {
//         headers: {
//             'Authorization': localStorage.getItem('userToken')
//         }
//     }).then((response) => {
//         if (response) {
//             dispatch(setUser(response.data))
//             dispatch(setAuth(true))
//             dispatch(setAuthSuccess(true))
//             dispatch(setPending(false))
//         } else {
//             dispatch(setPending(false))
//         }
//     })
//         .catch(err => err)
// }


export const signOut = () => (dispatch) => {
    localStorage.removeItem('userToken')
    dispatch(setUser(''))
}

export const { setPending, setAuth, setAuthSuccess, setUser } = authSlice.actions

export default authSlice.reducer