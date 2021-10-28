import { useParams } from "react-router";

import "./style.scss";
import SearchForm from "../SearchForm";
import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../Courses/CourseCard";
import { getSearchedCourses } from "../../store/searchSlice";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NoFound from "../NoFound";


function SearchPage() {
    const Searchedcourses = useSelector((state) => state.search.courses);
    const { searchValue } = useParams()
    const dispatch = useDispatch()


    useEffect(() => {
        searchValue && dispatch(getSearchedCourses(searchValue))
    }, [searchValue, dispatch])

    return (
        <div className="search-page">
            <SearchForm />
            {Searchedcourses.length ? Searchedcourses.map(course => (
                <Link to={`/course/${course.id}`} key={course.id}>
                    <CourseCard course={course} />
                </Link>
            )) : <NoFound />
            }
        </div>
    );
}

export default SearchPage;
