function SubPopupMenu({ list }) {
  return (
    <div className="sub-popup-menu">
      {list.map((item) => (
        <p>{item.title}</p>
      ))}
    </div>
  );
}

export default SubPopupMenu;
