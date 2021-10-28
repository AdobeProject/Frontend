import "./style.scss";

function CourseCard({ course }) {

  if (course) {
    return (<div className="course-main" >
      <img className="course-img" src={course.img} alt="courses_image" />
      <p className="course-title"><b>Title: </b>{course.name}</p>
      <p className="course-author"><b>Author: </b>{course.owner.firstName}</p>
      <p className="course-date">{course.created_at.slice(0, course.created_at.indexOf('T'))}</p>
    </div>
    )
  }


  return (
    <div></div>
  )
}

export default CourseCard;
