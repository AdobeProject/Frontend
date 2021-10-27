function CategoryCard({ category }) {
  return (
    <div className="categori-card">
      <div>
          <img className="category-img" src={category.imgId}></img>
          </div>
      {category && <p>{category.name.toUpperCase()}</p>}
    </div>
  );
}

export default CategoryCard;
