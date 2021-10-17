import SubPopupMenu from "./SubPopupMenu";
import { Link } from "react-router-dom";

function PopupMenu({ categories }) {
  return (
    <div className="popup-menu">
      {categories.map((category) => (
        <div key={category.title}>
          <Link to={`/${category.title}`}>
            <p> {category.title} </p>
          </Link>
          <SubPopupMenu category={category} />
        </div>
      ))}
    </div>
  );
}

export default PopupMenu;
