import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const URL = 'http://192.168.88.20:8080'

const initialState = {
    courses: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setCourses: (state, action) => {
            return {
                ...state,
                courses: action.payload,
            }
        }
    },
})

export const getSearchedCourses = (word) => (dispatch) => {

    axios.get(`${URL}/course/search/${word}`)
        .then((response) => {
            if (response) {
                console.log('response', response);
                dispatch(setCourses(response.data))
            }
        })
        .catch(err => err)
}

export const { setCourses } = searchSlice.actions

export default searchSlice.reducer