import { useState } from "react";
import "./style.scss";
import SearchForm from "../SearchForm";
import Categories from "../Categeories";
import CourseCard from "../Courses/CourseCard";


function Main() {

  return (
    <div className="main">
      <div className="main-content"></div>
      <SearchForm />
      <div className="title">Categories</div>
      <Categories />
      <div className="title">Last Courses</div>
      <div className="courses-list">
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

export default Main;
