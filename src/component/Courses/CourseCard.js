import "./style.scss";

function CourseCard() {
  return (
    <div className="course-main">
      <div
        className="course-img"
        style={{
          backgroundImage:
            "url(https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg)",
        }}
      />
      <p className="course-title">Title</p>
      <p className="course-author"> Author </p>
      <p className="course-date">10:11:2021</p>
    </div>
  );
}

export default CourseCard;
