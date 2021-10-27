import { useParams } from "react-router";
import FilterSection from "./FilterSection";
import CourseCard from "./CourseCard";
import "./style.scss";
import { Link } from "react-router-dom";
import SearchForm from "../SearchForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCourses } from "../../store/mainSlice";

function Courses() {
  const courses = useSelector((state) => state.categoriesReducer.courses);
  console.log('courses', courses);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCourses())
  }, [])

  return (
    <div className="courses-page">
      <FilterSection />
      <div className="courses-contenet">
        <SearchForm />
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
