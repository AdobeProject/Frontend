import { useParams } from "react-router";
import FilterSection from "./FilterSection";
import CourseCard from "./CourseCard";
import "./style.scss";
import { Link } from "react-router-dom";

function Courses() {
  let { catTitle, subCaTitle } = useParams();

  return (
    <div className="courses-page">
      <FilterSection />
      <div className="courses-contenet">
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
