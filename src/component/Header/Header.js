import "./style.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import PopupMenu from "./PopupMenu";
import { useState } from "react";
import LoginRegistry from "../LoginRegistry/LoginRegistry";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";

function Header() {

  const [buttonPopup, setButtonPopup] = useState(false);
  const wrapperRef = useRef(null);
  const registerRef = useRef(null);

  const categories = useSelector((state) => state.categoriesReducer.categories);


    useEffect(() => {
        console.log(registerRef,'22');
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !registerRef.current.contains(event.target)) {
              setButtonPopup(false)
            }
        }

        // Bind the event listener
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClickOutside);
        };
    }, [wrapperRef,registerRef]);


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
          <PopupMenu categories={categories} />
        </div>
      </div>
      <div className="header-btns">
        <Link to="/UserPage">
          <p>userName</p>
        </Link>
        <Button className="login-btn" ref={registerRef} onClick={() => setButtonPopup(true)}>
          Sign In
        </Button>
      </div>
      <div>
      { buttonPopup &&
                <div  className="popup">
                <div ref={wrapperRef} className="popup-inner">
                <LoginRegistry  />
          
                </div>
              </div>
      }
      </div>



    </div>
  );
}

export default Header;
