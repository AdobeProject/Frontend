import "./SuggestedCourseSection.scss";
import CoursePage from "../CoursePage";
import CourseCard from "../../Courses/CourseCard";

function SuggestedCourssesSection() {
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