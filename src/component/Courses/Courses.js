import { useParams } from "react-router";
import FilterSection from "./FilterSection";
import CourseCard from "./CourseCard";
import "./style.scss";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Courses() {
  let { catTitle, subCaTitle } = useParams();
  const courses = useSelector((state) => state.search.courses);
  useEffect(() => {

  })




  return (
    <div className="courses-page">
      <FilterSection />
      <div className="courses-contenet">
        {catTitle === "search" && <SearchForm />}
        <Link to='course'>
          <CourseCard />
        </Link>
        <Link to='course'>
          <CourseCard />
        </Link>
        <Link to='course'>
          <CourseCard />
        </Link>
        <Link to='course'>
          <CourseCard />
        </Link>
        <Link to='course'>
          <CourseCard />
        </Link>
        <Link to='course'>
          <CourseCard />
        </Link>
        <Link to='course'>
          <CourseCard />
        </Link>
      </div>
    </div>
  );
}

export default Courses;
