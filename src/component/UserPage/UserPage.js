import React from "react";
import "./UserPage.css"
import CourseCard from "../Courses/CourseCard";
import edit from "./edit.png";
import EditDetails from './EditDetails'
import { useState } from 'react';

function UserPage() {
    // const [surname, setSurname] = useState('user.surname')
    const [EditButton, SetEditButton] = useState(false);
    return (
        <div className="bigDiv">
            <EditDetails trigger={EditButton} setTrigger={SetEditButton} />
            <div className="myProfile">
                <img onClick={() => SetEditButton(true)} title="Edit" className="editBtn" src={edit} />
                <img className="userPhoto" src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png" />
                <input className="edit" multiple type="file" />
                <div className="info">
                    <p>name</p>
                    <p>surname</p>
                    <p>Email: email@example.com</p>
                    <p>Watched Lessons {"\n"} 0</p>
                </div>
            </div>
            <div className="coursesContainer">
                <div className="titleCourses">My Courses</div>
                <div className="container">
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
                </div>
            </div>
        </div>
    );
}

export default UserPage;