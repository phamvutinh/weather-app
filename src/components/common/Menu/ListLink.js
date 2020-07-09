import React from "react";

function ListLink() {
  return (
    <ul>
      <li className="menu__list-item">
        London <span className="material-icons">keyboard_arrow_right</span>
      </li>
      <li className="menu__list-item">
        Barcelona <span className="material-icons">keyboard_arrow_right</span>
      </li>
      <li className="menu__list-item">
        Long Beach <span className="material-icons">keyboard_arrow_right</span>
      </li>
    </ul>
  );
}
export default React.memo(ListLink);
