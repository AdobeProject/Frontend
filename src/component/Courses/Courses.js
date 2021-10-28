import { useParams } from "react-router";
import FilterSection from "./FilterSection";
import CourseCard from "./CourseCard";
import "./style.scss";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";
import {useSelector } from "react-redux";
import NoFound from "../NoFound";

function Courses() {
  const courses = useSelector((state) => state.categoriesReducer.courses);

  return (
    <div className="courses-page">
       <FilterSection />
      <div className="courses-contenet">
        {!!courses.length && <SearchForm />}
        {courses.length ? courses.map(course => (
          <Link to={`/course/${course.id}`}>
            <CourseCard course={course} />
          </Link>
        )) : <NoFound />}
      </div>
    </div>
  );
}

export default Courses;
