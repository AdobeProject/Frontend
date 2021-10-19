import React, { useState } from "react";

import "./UserPage.scss"
import CourseCard from "../Courses/CourseCard";
import edit from "./edit.png";
import EditDetails from './EditDetails'
import { Button } from "@material-ui/core";
import AddCourseForm from "./AddCourseForm";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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
                <input className="edit" type="file" />
                <div className="userPageInfo">
                    <p>name</p>
                    <p>surname</p>
                    <p>email@example.com</p>
                    <p>Watched Lessons {"\n"} 0</p>
                    {
                        isAddCourse ? <Button onClick={() => setIsAddCourse(false)}>View Course</Button> : <Button onClick={() => setIsAddCourse(true)}>Add Course</Button>
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
                        <div className="container">
                            <div className="titleCourses">My Courses</div>

                            <div className="courses">
                                <OwlCarousel className='owl-theme' loop margin={20}>
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                    <CourseCard className='item' />
                                </OwlCarousel>;
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
}

export default UserPage;