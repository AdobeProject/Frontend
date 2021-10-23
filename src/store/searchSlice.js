import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    word: '',
    courses: []
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setCourses: (state, action) => {
            return {
                ...state,
                word: action.payload.word,
                courses: action.payload.data,
            }
        }
    },
})

export const getSearchItem = (word) => (dispatch) => {

    axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => {
            if (response) {
                dispatch(setCourses({ data: response.data, 'word': word }))
            }
        })
        .catch(err => err)
}

export const { setCourses } = searchSlice.actions

export default searchSlice.reducer