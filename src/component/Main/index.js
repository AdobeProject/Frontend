import "./style.scss";
import SearchForm from "../SearchForm";
import Categories from "../Categeories";
import CourseCard from "../Courses/CourseCard";
import { Link } from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function Main() {

  
  const options = {
    margin: 10,
    responsiveClass: true,
    dots: true,
    smartSpeed: 500,
    loop: true,
    responsive: {
        200: {
            items: 1,
        },
        500: {
            items: 2,
        },
        950: {
            items: 3,
        },
        1400: {
            items: 5,

        }
    },
};

  return (
    <div className="main">
      <div className="main-content"></div>
      <SearchForm />
      <div className="title">
        <p>
          Most Popular Categories
        </p>
      </div>
      <Categories />
      <div className="title">
        <p>
          Last Courses
        </p>
      </div>
      <div className="courses-list">
      <OwlCarousel className='owl-theme' {...options}>
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
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Main;
