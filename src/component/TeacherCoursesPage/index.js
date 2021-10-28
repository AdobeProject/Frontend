
import CourseCard from "../Courses/CourseCard"

import "./style.scss"
import accountPhoto from "./images/account.jpg"
import { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { getTeacherCourses } from "../../store/mainSlice"
import { Link } from "react-router-dom"

function TeacherCoursesPage() {

  const { teacherEmail } = useParams();
  const teacherCourses = useSelector((state) => state.categoriesReducer.teacherCourses);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTeacherCourses(teacherEmail))

  }, [dispatch,teacherEmail])
  return (
    <div className="teacher-page">
      <div className='account-info'>
        <img src={accountPhoto} alt='img'></img>
        <p>{teacherEmail}</p>
      </div>
      <div className="teacher-courses">
        {teacherCourses.map(course => (
          <Link to={`/course/${course.id}`} key={course.id}>
            <CourseCard course={course} />
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default TeacherCoursesPage