import { Link } from "react-router-dom";

function SubPopupMenu({ list }) {
  return (
    <div className="sub-popup-menu">
      {list.map((item) => (
        <Link to={`/${item}`}>
          <p>{item}</p>
        </Link>
      ))}
    </div>
  );
}

export default SubPopupMenu;
