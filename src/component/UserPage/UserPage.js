import React, { useEffect, useState } from "react";

import "./UserPage.scss"
import CourseCard from "../Courses/CourseCard";
import edit from "./edit.png";
import EditDetails from './EditDetails'
import { Button } from "@material-ui/core";
import AddCourseForm from "./AddCourseForm";
import accountPhoto from './account.jpg'
import { useDispatch, useSelector } from "react-redux";
import { getEnrolledCourse } from "../../store/authSlice";
import { Link } from "react-router-dom";

function UserPage() {
    const user = useSelector(state => state.auth.user)
    const userCourses = useSelector(state => state.auth.userCourses['courses'])

    const [editButton, setEditButton] = useState(false);
    const [isAddCourse, setIsAddCourse] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        if(user.userRole==='TEACHER'){
            
        
        }else{
            dispatch(getEnrolledCourse())

        }
    }, [])


    const [userPhoto, setUserPhoto] = useState("https://www.iephb.ru/wp-content/themes/iephb/images/default_user.png")
    return (
        <div className="bigDiv">
            <EditDetails trigger={editButton} setTrigger={setEditButton} />
            <div className="myProfile">
                <img onClick={() => setEditButton(true)} title="Edit" className="editBtn" src={edit} />
                <img className="userPhoto" src={accountPhoto} alt='userPhoto' />
                <input className="edit" type="file" />
                <div className="userPageInfo">
                    {user && (<>
                        <p>{user.firstName}</p>
                        <p>{user.lastName}</p>
                        <p>{user.email}</p></>)}
                    <p>Watched Lessons {"\n"} 0</p>
                    {
                       user && user.userRole === 'TEACHER'&& ((user  && isAddCourse) ? <Button onClick={() => setIsAddCourse(false)}>View Course</Button> : <Button onClick={() => setIsAddCourse(true)}>Add Course</Button>)
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
                                {userCourses && userCourses.map(course => (
                                    <Link to={`/course/${course.id}`}>
                                        <CourseCard course={course} />
                                    </Link>
                                ))
                                }
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default UserPage;