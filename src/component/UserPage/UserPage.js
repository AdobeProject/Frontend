import React from "react";
import "./UserPage.css"
import CourseCard from "../Courses/CourseCard";
import edit from "./edit.png";

function UserPage() {
    return (
        <div className = "bigDiv">
            <div className="myProfile">
                <img className="editBtn" src={edit} />
                <img className="userPhoto" src="https://w7.pngwing.com/pngs/340/956/png-transparent-profile-user-icon-computer-icons-user-profile-head-ico-miscellaneous-black-desktop-wallpaper.png" />
                <button>Upload</button>
                <div className="info">
                    <p>user.name user.surname</p>
                    <p>Email: email@example.com</p>
                    <p>What I am learning</p>
                </div>
            </div>
            <div className = "coursesContainer">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;