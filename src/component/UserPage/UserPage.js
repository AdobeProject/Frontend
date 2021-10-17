import React from "react";
import "./UserPage.css"
import CourseCard from "../Courses/CourseCard";
import edit from "./edit.png";
import EditDetails from './EditDetails'
import { useState } from 'react';

function UserPage() {
    // const [surname, setSurname] = useState('user.surname')
    const [EditButton, SetEditButton] = useState(false);
    const [Name, SetName] = useState('user.name');
    const [Surname, SetSurname] = useState('user.surname')
    const [UserPhoto, SetUserPhoto] = useState("https://www.iephb.ru/wp-content/themes/iephb/images/default_user.png")
    return (
        <div className="bigDiv">
            <EditDetails trigger={EditButton} setTrigger={SetEditButton} />
            <div className="myProfile">
                <img onClick={() => SetEditButton(true)} title="Edit" className="editBtn" src={edit} />
                <img className="userPhoto" src={UserPhoto} />
                <input className="edit" multiple type="file" />
                <div className="userPageInfo">
                    <p>{Name}</p>
                    <p>{Surname}</p>
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