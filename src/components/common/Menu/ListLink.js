import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

function ListLink() {
  const { addWoeid, woeid, cities } = useContext(GlobalContext);

  function handleClick(woeid) {
    if (addWoeid) {
      addWoeid(woeid);
    }
  }

  return (
    <ul>
      {cities.length
        ? cities.map((city) => (
            <li
              key={city.woeid}
              className={`menu__list-item ${
                city.woeid === woeid ? "active" : ""
              }`}
              onClick={() => handleClick(city.woeid)}
            >
              {city.title}
              <span className="material-icons">keyboard_arrow_right</span>
            </li>
          ))
        : "Loading..."}
    </ul>
  );
}
export default ListLink;
