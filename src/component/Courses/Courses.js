import { useParams } from "react-router";
import FilterSection from "./FilterSection";
import CourseCard from "./CourseCard";
import "./style.scss";

function Courses() {
  let { catTitle, subCaTitle } = useParams();

  return (
    <div className="courses-page">
      <FilterSection />
      <div className="courses-contenet">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}

export default Courses;
