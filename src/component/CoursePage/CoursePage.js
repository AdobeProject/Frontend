import React from "react";
import { Link } from "react-router-dom";
import SuggestedCourssesSection from "./SuggestedCoursesSection/SuggestedCourseSection";

import "./CoursePage.scss"
import ReactPlayer from "react-player";

function CoursePage() {
    return (
        <div className='course-page-main'>
            <div className="courseInfo">
                <div>
                    <Link to="/teacher">
                        <div className="teacherAcc">
                            <img className="teacherProfPic" src="https://www.iephb.ru/wp-content/themes/iephb/images/default_user.png" />
                            <p className="teacherName">Teacher.username</p>
                        </div>
                    </Link>
                    <img className="coursePhoto" src="https://pyxis.nymag.com/v1/imgs/c0c/fe3/2c8ccff540d5bd1d55b6ce5e106720976e.rsquare.w600.jpg" />
                    <p className="courseName">
                        React JS ПРОДВИНУТЫЙ КУРС</p>
                    <p className="courseCategory">Course category</p>
                </div>
            </div>
            <div className="courseContainer">
                <div className="videoQuizesContainer">
                    <div className="videoContainer">
                        <ReactPlayer url={'https://youtu.be/XzLuMtDelGk'} controls={true} />
                    </div>
                    <div className="discriptionContainer">
                        <p>This course is the most up-to-date, comprehensive and bestselling React course!
                            It was completely updated and re-recorded from the ground up in 2021 - it teaches the very latest version of React with all the core, modern features you need to know!
                            It was completely updated and re-recorded from the ground up in 2021 - it teaches the very latest version of React with all the core, modern features you need to know!
                        </p>
                    </div>
                </div>
                <SuggestedCourssesSection />
            </div>

        </div>
    )
}

export default CoursePage;