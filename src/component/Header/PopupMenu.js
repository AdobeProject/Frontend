import SubPopupMenu from "./SubPopupMenu";

function PopupMenu({ list }) {
  return (
    <div className="popup-menu">
      {list.map((item) => (
        <div>
          <p> {item.title} </p>
          <SubPopupMenu
            list={[
              { title: "111111111" },
              { title: "22222222222" },
              { title: "333333333333" },
            ]}
          />
        </div>
      ))}
    </div>
  );
}

export default PopupMenu;
