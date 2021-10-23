function CategoryCard({ category }) {
  return (
    <div className="categori-card">
      <div
        className="category-img"
        style={{
          backgroundImage:
            "url(https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg)",
        }}
      ></div>
      {category && <p>{category.title}</p>}
    </div>
  );
}

export default CategoryCard;
