import "./SuggestedCourseSection.scss";
import CourseCard from "../../Courses/CourseCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function SuggestedCourssesSection() {
  const dispatch = useDispatch();

  useEffect(() => {

  }, [])
  return (
    <div className="suggestedCoursesContainer">
      <div className="suggestedTitle">Suggested Courses For You</div>
      <div className="linksContainer">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  )
}

export default SuggestedCourssesSection