import "./style.scss";
import * as React from "react";
import Button from "@mui/material/Button";
import PopupMenu from ".//PopupMenu";

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
  return (
    <div className="header">
      <div className="header-logo">
        {/* <img
          src="https://logodownload.org/wp-content/uploads/2019/07/udemy-logo.png"
          alt="Udemy"
          className="logo"
        /> */}
      </div>
      <div className="header-menu">
        <div>
          <p className="category-menu">Collections</p>
          <PopupMenu list={categories} />
        </div>
        <p className="category-menu">Courses</p>
      </div>
      <div className="header-btns">
        <Button variant="outlined" color="primary">
          Sign In
        </Button>
      </div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Header;
