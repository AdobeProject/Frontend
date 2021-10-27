import { Link } from "react-router-dom";

function SubPopupMenu({ category }) {
  return (
    <div className="sub-popup-menu">
      {category.subCategories.map((item) => (
        <Link to={`/${category.name}/${item.id}`}>
          <p key={item.id}>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default SubPopupMenu;
