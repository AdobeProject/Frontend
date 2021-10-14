import "./style.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import PopupMenu from "./PopupMenu";
import Popup from "../LoginRegistry/Popup";
import { useState } from "react";
import LoginRegistry from "../LoginRegistry/LoginRegistry";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const categories = useSelector((state) => state.categoriesReducer.categories);

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="header-menu">
        <div>
          <p className="category-menu">Collections</p>
          <PopupMenu list={categories} />
        </div>
      </div>
      <div className="header-btns">
        <Link to="/UserPage">
          <p>userName</p>
        </Link>
        <Button className="login-btn" onClick={() => setButtonPopup(true)}>
          Sign In
        </Button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <LoginRegistry />
      </Popup>
    </div>
  );
}

export default Header;
