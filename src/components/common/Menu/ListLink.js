import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import weatherApi from "../../../api/weatherApi";

function ListLink() {
  const { addWoeid, woeid } = useContext(GlobalContext);
  const [cities, setCities] = useState([]);
  let lat = null;
  let lng = null;

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      lat = position.coords.latitude;
      lng = position.coords.longitude;
    });
  }

  useEffect(() => {
    if (lat && lng) {
      const params = { lattlong: `${lat},${lng}` };
      weatherApi.locationSearch(params).then((result) => {
        setCities(result.data);
      });
    }
  }, [lat, lng]);

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
