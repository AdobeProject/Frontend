import SubPopupMenu from "./SubPopupMenu";
import { Link } from "react-router-dom";

function PopupMenu({ list }) {
  return (
    <div className="popup-menu">
      {list.map((item) => (
        <div>
          <Link to={`/${item.title}`}>
            <p> {item.title} </p>
          </Link>
          <SubPopupMenu list={item.subCategories} />
        </div>
      ))}
    </div>
  );
}

export default PopupMenu;
