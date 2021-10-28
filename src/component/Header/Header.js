import "./style.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import PopupMenu from "./PopupMenu";
import { useState } from "react";
import LoginRegistry from "../LoginRegistry/LoginRegistry";
import logo from "./logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { useEffect } from "react";
import { signOut } from "../../store/authSlice";
import { getCategories } from "../../store/mainSlice";


function Header() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const wrapperRef = useRef(null);
  const registerRef = useRef(null);
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()

  function handleSignOut() {
    dispatch(signOut())
  }

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])


  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target) && !registerRef.current.contains(event.target)) {
        setButtonPopup(false)
      }
    }
    if (user) {
      setButtonPopup(false)
    }

    // Bind the event listener
    document.addEventListener("click", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("click", handleClickOutside);
    };
  }, [wrapperRef, registerRef, user]);

  return (
    <div className="header">
      <div className="header-logo">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="header-menu">
        <div>
          <p className="CategoryMenu">Categories</p>
          <PopupMenu categories={categories} />
        </div>
      </div>
      <div className="header-btns">
        {!user ? (
          <Button className="login-btn" ref={registerRef} onClick={() => setButtonPopup(true)}>
            Sign In / Sign Up
          </Button>
        ) : (
          <>
            <div>
              <Link to="/userPage">
                <p className="userName">{user.firstName} </p>
              </Link>
            </div>
            <Button className="signout-btn" onClick={handleSignOut} >
              Sign Out
            </Button>
          </>
        )}

      </div>
      <div>
        {buttonPopup &&
          <div className="popup">
            <div ref={wrapperRef} className="popup-inner">
              <LoginRegistry />
            </div>
          </div>
        }
      </div>



    </div>
  );
}

export default Header;
