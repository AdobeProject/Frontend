import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const URL = 'http://192.168.88.244:8080'

const initialState = {
    currentCategory: '',
    categories: [
        // {
        //     title: "Development",
        //     subCategories: [
        //         {
        //             title: "Web Development",
        //             id: 1
        //         },
        //         {
        //             title: "Mobile Development",
        //             id: 2
        //         },
        //         {
        //             title: "Game  Development",
        //             id: 3
        //         },
        //         {
        //             title: "No-code Development",
        //             id: 4
        //         },
        //     ],
        // },
        // {
        //     title: "Language",
        //     subCategories: [
        //         {
        //             title: "English",
        //             id: 5
        //         },
        //         {
        //             title: "Chinese",
        //             id: 6
        //         }, {
        //             title: "Russian",
        //             id: 7
        //         }, {
        //             title: "Armenian",
        //             id: 8
        //         }],
        // },
        // {
        //     title: "Business",
        //     subCategories: [
        //         {
        //             title: "Managment",
        //             id: 9
        //         },
        //         {
        //             title: "SSM",
        //             id: 10
        //         },
        //         {
        //             title: "Project managmnet",
        //             id: 11
        //         },
        //         {
        //             title: "Other Business",
        //             id: 12
        //         },
        //     ],
        // },
    ],
    courses: [],
    lastCourses: []
}

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setCategories: (state, action) => {
            return {
                ...state,
                categories: action.payload
            }
        },
        setCourses: (state, action) => {
            return {
                ...state,
                courses: action.payload
            }
        }
    },
})

export const getCategories = () => (dispatch) => {

    axios.get(`${URL}/categories/`)
        .then((response) => {
            if (response) {
                console.log('asd', response.data.categoryDetailsResponseModels);
                dispatch(setCategories(response.data.categoryDetailsResponseModels))
            }
        })
        .catch(err => err)
}

export const getCourses = () => (dispatch) => {
    axios.get(`${URL}/categories/`)
        .then((response) => {
            if (response) {
                dispatch(setCourses(response.data.courses))
            }
        })
        .catch(err => err)
}

export const getCoursesByCatName = () => (dispatch) => {
    axios.get('http://192.168.88.217:8080/course/')
        .then((response) => {
            if (response) {
                dispatch(setCourses(response.data.courses))
            }
        })
        .catch(err => err)
}

export const getCoursesBySubCatName = () => (dispatch) => {
    axios.get('http://192.168.88.217:8080/course/')
        .then((response) => {
            if (response) {
                dispatch(setCourses(response.data.courses))
            }
        })
        .catch(err => err)
}

export const getLastCourses = () => (dispatch) => {
    axios.get('http://192.168.88.217:8080/course/')
        .then((response) => {
            if (response) {
                dispatch(setCourses(response.data.courses))
            }
        })
        .catch(err => err)
}

export const addCourse = (courseData) => (dispatch) => {

    axios.post('http://192.168.88.244:8080/upload/', courseData, {
        headers: {
            'Authorization': localStorage.getItem('userToken')
        }
    })
        .then(response => {
            if (response) {
                console.log(response);

            }
        })
}

export const { setCategories, setCourses } = mainSlice.actions

export default mainSlice.reducer