import React from "react";
import { useSelector } from "react-redux";

import CategoryCard from "./CategoeryCard";
import "./style.scss";

const catego = [
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
  const categories = useSelector((state) => state.categoriesReducer.categories);
  console.log(categories, "");
  return (
    <div className="main-catgeories">
      {categories &&
        categories.map((category) => <CategoryCard category={category} />)}
    </div>
  );
}

export default Categories;
