import "./style.scss";

function CourseCard() {
  return (
    <div className="course-main">
      <img className="course-img" src='https://img-c.udemycdn.com/course/240x135/629302_8a2d_2.jpg' alt="courses_image"/>
      <p className="course-title"><b>Title:</b> React JS Tutorial</p>
      <p className="course-author"><b>Author:</b> John Joe </p>
      <p className="course-category"><b>Category:</b> Science </p>
      <p className="course-date">10:11:2021</p>
    </div>
  );
}

export default CourseCard;
