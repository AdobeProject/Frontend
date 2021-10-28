import "./SuggestedCourseSection.scss";
import CourseCard from "../../Courses/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSugestedCourses } from "../../../store/mainSlice";
import { Link } from "react-router-dom";


function SuggestedCourssesSection({ catName }) {
  const dispatch = useDispatch();
  const sugestedCourses = useSelector((state) => state.categoriesReducer.sugestedCourses);


  useEffect(() => {
    dispatch(getSugestedCourses(catName))
  }, [])
  return (
    <div className="suggestedCoursesContainer">
      <div className="suggestedTitle">Suggested Courses For You</div>
      <div className="linksContainer">
        {
          sugestedCourses && sugestedCourses.map(course => <Link to={`/course/${course.id}`}>
            <CourseCard course={course} />
          </Link>)
        }
      </div>
    </div>
  )
}

export default SuggestedCourssesSection