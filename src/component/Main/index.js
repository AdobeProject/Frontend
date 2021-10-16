import { useState } from "react";
import "./style.scss";
import SearchForm from "../SearchForm";
import Categories from "../Categeories";
import CourseCard from "../Courses/CourseCard";
import { Link } from "react-router-dom";



function Main() {

  return (
    <div className="main">
      <div className="main-content"></div>
      <SearchForm />
      <div className="title">Categories</div>
      <Categories />
      <div className="title">Last Courses</div>
      <div className="courses-list">
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

export default Main;
