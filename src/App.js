import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/actions/main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Courses from "./component/Courses/Courses";

function App() {
  const reduxstate = useSelector((state) => state.mainReducer.person);
  const dispatch = useDispatch();
  const getData = () => {
    dispatch(getUser());
  };
  console.log(reduxstate);
  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/:catTitle">
            <Courses />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
