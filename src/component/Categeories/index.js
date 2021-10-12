import React from "react";

import CategoryCard from "./CategoeryCard";
import "./style.scss";

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

function Categories() {
  return (
    <div className="main-catgeories">
      {categories.map((category) => (
        <CategoryCard category={category} />
      ))}
    </div>
  );
}

export default Categories;
