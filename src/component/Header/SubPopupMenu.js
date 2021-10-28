import { Link } from "react-router-dom";

function SubPopupMenu({ category }) {
  return (
    <div className="sub-popup-menu">
      {category.subCategories.map((item) => (
        <Link to={`/${category.name}/${item.id}`} key={item.id}>
          <p >{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default SubPopupMenu;
