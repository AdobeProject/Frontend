import React from "react";
import { Link } from "react-router-dom";
import SuggestedCourssesSection from "./SuggestedCoursesSection/SuggestedCourseSection";

import "./CoursePage.scss"

function CoursePage() {
    return (
        <div className='course-page-main'>
            <div className="courseInfo">
                <div>
                    <img className="coursePhoto" src="https://pyxis.nymag.com/v1/imgs/c0c/fe3/2c8ccff540d5bd1d55b6ce5e106720976e.rsquare.w600.jpg" />
                    <p className="courseName">
                        React JS ПРОДВИНУТЫЙ КУРС</p>
                    <p className="courseCategory">Course category</p>
                </div>
                <Link to="/teacher">
                <div className="teacherAcc">
                    <img className="teacherProfPic" src="https://www.iephb.ru/wp-content/themes/iephb/images/default_user.png" />
                    <p className="teacherName">Teacher.username</p>
                </div>
                </Link>
            </div>
            <div className="courseContainer">
                <div className="videoQuizesContainer">
                    <div className="videoContainer">
                        <iframe className="videoPlayer" width="660" height="415" src="https://www.youtube.com/embed/ElaIKk8ba5g?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

export default CoursePage