import SubPopupMenu from "./SubPopupMenu";
import { Link } from "react-router-dom";

function PopupMenu({ categories }) {
  return (
    <div className="popup-menu">
      {categories.map((category) => (
        <div key={category.name}>
          <Link to={`/${category.name}`}>
            <p> {category.name} </p>
          </Link>
          <SubPopupMenu category={category} />
        </div>
      ))}
    </div>
  );
}

export default PopupMenu;
