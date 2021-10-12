import { useParams } from "react-router";
import "./style.scss";

function Courses() {
  let { catTitle } = useParams();

  console.log("catTitle", catTitle);

  return <div className="course-main">AAAAAAAAAAAAAAA</div>;
}

export default Courses;
