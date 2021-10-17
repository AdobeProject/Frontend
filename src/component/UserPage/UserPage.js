import React, { useState } from "react";

import "./UserPage.scss"
import CourseCard from "../Courses/CourseCard";
import edit from "./edit.png";
import EditDetails from './EditDetails'
import { Button } from "@material-ui/core";
import AddCourseForm from "./AddCourseForm";

function UserPage() {
    // const [surname, setSurname] = useState('user.surname')
    const [editButton, setEditButton] = useState(false);
    const [isAddCourse, setIsAddCourse] = useState(true)

    const [userPhoto, setUserPhoto] = useState("https://www.iephb.ru/wp-content/themes/iephb/images/default_user.png")
    return (
        <div className="bigDiv">
            <EditDetails trigger={editButton} setTrigger={setEditButton} />
            <div className="myProfile">
                <img onClick={() => setEditButton(true)} title="Edit" className="editBtn" src={edit} />
                <img className="userPhoto" src={userPhoto} alt='userPhoto' />
                <input className="edit" multiple type="file" />
                <div className="userPageInfo">
                    <p>'name'</p>
                    <p>'surname'</p>
                    <p>Email: email@example.com</p>
                    <p>Watched Lessons {"\n"} 0</p>
                    {
                        isAddCourse ? <Button onClick={() => setIsAddCourse(false)}>View Course</Button> : <Button onClick={() => setIsAddCourse(true)}>Add Course</Button>
                    }

                </div>
            </div>
            <div className="coursesContainer">
                <div className="container">
                    {isAddCourse ? (
                        <AddCourseForm />
                    ) : (
                        <>
                            <div className="titleCourses">My Courses</div>

                            <div className="courses">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </div>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </>
                    )}

                </div>
            </div>
        </div>
    );
}

export default UserPage;