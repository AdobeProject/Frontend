import "./App.scss";
import Header from "./component/Header/Header";
import Main from "./component/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Courses from "./component/Courses/Courses";
import UserPage from "./component/UserPage/UserPage";
import CoursePage from "./component/CoursePage/CoursePage";
import TeacherCoursesPage from "./component/TeacherCoursesPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authentication } from "./store/authSlice";
import SearchPage from "./component/SearchPage";
import { getLastCourses } from "./store/mainSlice";


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.getItem('userToken')) {
      dispatch(authentication())
    }
    dispatch(getLastCourses())

  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/userPage" exact>
            <UserPage />
          </Route>
          <Route path="/course/:courseId" >
            <CoursePage />
          </Route>
          <Route path="/teacher/:teacherEmail" exact>
            <TeacherCoursesPage />
          </Route>
          <Route path="/search/:searchValue" >
            <SearchPage />
          </Route>
          <Route path="/:catTitle" exact>
            <Courses />
          </Route>
          <Route path="/:catTitle/:subCatId" exact>
            <Courses />
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
