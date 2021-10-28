import React, { useEffect, useState } from "react";

import "./UserPage.scss"
import CourseCard from "../Courses/CourseCard";
import edit from "./edit.png";
import EditDetails from './EditDetails'
import { Button } from "@material-ui/core";
import AddCourseForm from "./AddCourseForm";
import accountPhoto from '../../images/userPhoto.png'
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourse } from "../../store/authSlice";
import { Link } from "react-router-dom";
import { getTeacherCourses } from "../../store/mainSlice";

function UserPage() {
    const user = useSelector(state => state.auth.user)
    const userCourses = useSelector(state => state.auth.userCourses['courses'])
    const teacherCourses = useSelector((state) => state.categoriesReducer.teacherCourses);


    const [editButton, setEditButton] = useState(false);
    const [isAddCourse, setIsAddCourse] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if (user && user.userRole === 'TEACHER') {
            dispatch(getTeacherCourses(user.email))
        } else {
            dispatch(getEnrolledCourse())
        }
    }, [user, dispatch])


    return (
        <div className="bigDiv">
            <EditDetails trigger={editButton} setTrigger={setEditButton} />
            <div className="myProfile">
                <img onClick={() => setEditButton(true)} title="Edit" className="editBtn" src={edit}  alt='img' />
                <img className="userPhoto" src={accountPhoto} alt='userPhoto' />
                <input className="edit" type="file" />
                <div className="userPageInfo">
                    {user && (<>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                        <p>{user.email}</p></>)}
                    <p>Watched Lessons {"\n"} 0</p>
                    {
                        user && user.userRole === 'TEACHER' && ((user && isAddCourse) ? <Button onClick={() => setIsAddCourse(false)}>View Course</Button> : <Button onClick={() => setIsAddCourse(true)}>Add Course</Button>)
                    }

                </div>
            </div>
            <div className="coursesContainer">
                {isAddCourse ? (
                    <div className="add-courses-container">
                        <AddCourseForm />
                    </div>
                ) : (
                    <>
                        <div className="couses-list">
                            <div className="titleCourses">My Courses</div>
                            <div className="courses">
                                {user && user.userRole === 'TEACHER' && teacherCourses && teacherCourses.map(course => (
                                    <Link to={`/course/${course.id}`} key={course.id}>
                                        <CourseCard course={course} />
                                    </Link>
                                ))}
                                {user && user.userRole === 'STUDENT' && userCourses && userCourses.map(course => (
                                    <Link to={`/course/${course.id}`} key={course.id}>
                                        <CourseCard course={course} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default UserPage;