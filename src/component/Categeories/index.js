import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CategoryCard from "./CategoeryCard";
import "./style.scss";


function Categories() {
  const categories = useSelector((state) => state.categoriesReducer.categories);
  return (
    <div className="main-catgeories">
      {categories &&
        categories.map((category) => {
          return (
            <Link to={`${category.name}`} key={category.name}>
              <CategoryCard category={category} />
            </Link>

          )
        })}
    </div>
  );
}

export default Categories;
