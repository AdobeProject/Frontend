import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CategoryCard from "./CategoeryCard";
import "./style.scss";


function Categories() {
  const categories = useSelector((state) => state.categoriesReducer.categories);
  const mostPopCat = [...categories, ...categories];
  return (
    <div className="main-catgeories">
      {categories &&
      mostPopCat.map((category) => {
          return (
            <Link to={`${category.title}`} key={category.title}>
              <CategoryCard category={category} />
            </Link>

          )
        })}
    </div>
  );
}

export default Categories;
