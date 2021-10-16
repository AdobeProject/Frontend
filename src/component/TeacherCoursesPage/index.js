
import CourseCard from "../Courses/CourseCard"

import FilterSection from "../Courses/FilterSection"
import "./style.scss"
import accountPhoto from "./images/account.jpg"

function TeacherCoursesPage(){
    return (
        <div className="teacher-page">
            <div className='account-info'>
                <img src={accountPhoto}></img>
                <p>Name Surname</p>
                <FilterSection />
            </div>
        <div className="teacher-courses">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    )
}

export default TeacherCoursesPage