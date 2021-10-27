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



function App() {
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(authentication())
  // }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/userPage" exact>
            <UserPage />
          </Route>
          <Route path="/course" exact>
            <CoursePage />
          </Route>
          <Route path="/teacher" exact>
            <TeacherCoursesPage />
          </Route>
          <Route path="/:catTitle" exact>
            <Courses />
          </Route>
          <Route path="/:catTitle/:subCaTitle" exact>
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
