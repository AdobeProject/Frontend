import { Link } from "react-router-dom";

function SubPopupMenu({ category }) {
  return (
    <div className="sub-popup-menu">
      {category.subCategories.map((item) => (
        <Link to={`/${category.title}/${item.id}`}>
          <p key={item.id}>{item.title}</p>
        </Link>
      ))}
    </div>
  );
}

export default SubPopupMenu;
