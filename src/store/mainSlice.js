import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const URL="http://localhost:8080"

const initialState = {
    categories: [],
    courses: [],
    lastCourses: [],
    sugestedCourses: [],
    teacherCourses: [],
    mainCourse: {}
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
        },
        setMainCourse: (state, action) => {
            return {
                ...state,
                mainCourse: action.payload
            }
        },
        setLastCourses: (state, action) => {
            return {
                ...state,
                lastCourses: action.payload
            }
        },
        setSugestedCourses: (state, action) => {
            return {
                ...state,
                sugestedCourses: action.payload
            }
        },
        setTeacherCourses: (state, action) => {
            return {
                ...state,
                teacherCourses: action.payload
            }
        }
    },
})

export const getCategories = () => (dispatch) => {
    axios.get(`${URL}/categories/`)
        .then((response) => {
            if (response) {
                dispatch(setCategories(response.data.categoryDetailsResponseModels))
            }
        })
        .catch(err => err)
}

export const getCourses = (catTitle, subCatTitle) => (dispatch) => {
    axios.get(`${URL}/course/category/${catTitle}`)
        .then((response) => {
            if (response) {
                dispatch(setCourses(response.data))
            } else {
                setCourses([])

            }
        })
        .catch(err => err)
}

export const getMainCours = (courseId) => (dispatch) => {
    axios.get(`${URL}/course/${courseId}`)
        .then((response) => {
            if (response) {
                dispatch(setMainCourse(response.data.courses[0]))
            } else {
                setCourses({})
            }
        })
        .catch(err => err)
}

export const getCoursesBySubCatId = (data) => (dispatch) => {
    axios.get(`${URL}/course/subcategory/${data}`)
        .then((response) => {
            if (response) {
                dispatch(setCourses(response.data.courses))
            } else {
                setCourses([])
            }
        })
        .catch(err => err)
}


export const getLastCourses = () => (dispatch) => {
    axios.get(`${URL}/course/last10`)
        .then((response) => {
            if (response) {
                dispatch(setLastCourses(response.data))
            }
        })
        .catch(err => err)
}

export const getSugestedCourses = (catName) => (dispatch) => {
    axios.get(`${URL}/course/suggested/${catName}`)
        .then((response) => {
            if (response) {
                dispatch(setSugestedCourses(response.data))
            } else setSugestedCourses([])
        })
        .catch(err => err)
}

export const getTeacherCourses = (teacherEmail) => (dispatch) => {
    axios.get(`${URL}/course/teacher/${teacherEmail}`)
        .then((response) => {
            if (response) {
                dispatch(setTeacherCourses(response.data))
            } else setSugestedCourses([])
        })
        .catch(err => err)
}

export const addCourse = (courseData) => (dispatch) => {

    axios.post(`${URL}/course/`, courseData, {
        headers: {
            'Authorization': localStorage.getItem('userToken')
        }
    })
}
export const addImg = (data) => (dispatch) => {

    axios.post(`${URL}/upload`, data, {
        headers: {
            'Authorization': localStorage.getItem('userToken'),
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const { setCategories, setCourses, setLastCourses, setMainCourse, setSugestedCourses, setTeacherCourses } = mainSlice.actions

export default mainSlice.reducer