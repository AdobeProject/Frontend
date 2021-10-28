import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import SuggestedCourssesSection from "./SuggestedCoursesSection/SuggestedCourseSection";
import accountPhoto from './account.jpg'
import "./CoursePage.scss"
import ReactPlayer from "react-player";
import { useDispatch, useSelector } from "react-redux";
import { getMainCours } from "../../store/mainSlice";
import { useParams } from "react-router";
import { addToMyCourse } from "../../store/authSlice";


function CoursePage() {
    const mainCourse = useSelector((state) => state.categoriesReducer.mainCourse);
    const { courseId } = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMainCours(courseId))

    }, [courseId])

    const handelOnAddCourse = () => {
        dispatch(addToMyCourse(mainCourse.id))
    }

    return (
        <div className='course-page-main'>
            <div className="courseInfo">
                <div>
                    <img className="coursePhoto" src={mainCourse.img} />
                    <p className="courseCategory">Course category</p>
                    {mainCourse.owner && (<Link to={`/teacher/${mainCourse.owner.email}`}>
                        <div className="teacherAcc">
                            <img className="teacherProfPic" src={accountPhoto} />
                            <p className="teacherName">{mainCourse.owner.firstName}</p>
                            <p className="teacherName">{mainCourse.owner.lastName}</p>
                        </div>
                    </Link>)}
                </div>
            </div>
            <div className="courseContainer">
                <div className="bigContainer">
                    <div className="videoContainer">
                        <ReactPlayer url={mainCourse.video} controls={true} />
                    </div>
                    <div className="discriptionContainer">
                        <p className="courseName">{mainCourse.name}</p>
                        <p>{mainCourse.description}</p>
                        <button onClick={handelOnAddCourse}>Add This Course To My List</button>
                        <button>Delete This Course From My List</button>

                    </div>
                </div>
                {mainCourse && mainCourse.sub_category_id && mainCourse.sub_category_id.category && <SuggestedCourssesSection catName={mainCourse.sub_category_id.category.name} />}
            </div>
        </div>
    )
}

export default CoursePage;