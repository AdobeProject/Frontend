import "./style.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import PopupMenu from "./PopupMenu";
import Popup from "../LoginRegistry/Popup";
import { useState } from "react";
import LoginRegistry from "../LoginRegistry/LoginRegistry";
import logo from "./logo.png"
import {Link} from 'react-router-dom';


const categories = [
  {
    title: "Development",
    img: "",
  },
  {
    title: "Design",
    img: "",
  },
  {
    title: "Marketing",
    img: "",
  },
  {
    title: "Language",
    img: "",
  },
  {
    title: "Music",
    img: "",
  },
  {
    title: "Busines",
    img: "",
  },
];

function Header() {
  const [buttonPopup, setButtonPopup] = useState(false)
  return (
    <div className="header">
      <div className="header-logo">
        <img src={logo}
          alt="Logo"
          className="logo"
        />
      </div>
      <div className="header-menu">
        <div>
          <p className="category-menu">Collections</p>
          <PopupMenu list={categories} />
        </div>
        <p className="category-menu">Courses</p>

      </div>

      <div className="header-btns">
        <Link to="/UserPage">
          <p>user.name.page</p>
          </Link>
        <Button className="login-btn" onClick={() => setButtonPopup(true)}>
          Sign In
        </Button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <LoginRegistry />
      </Popup>
      <div></div>
      <div></div>
    </div>
  );
}

export default Header