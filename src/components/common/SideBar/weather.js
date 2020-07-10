import React from "react";
import { imagesObject } from "../../../utils/objectFreeze";

export default function Weather({
  the_temp,
  weather_state_name,
  weather_state_abbr,
}) {
  return (
    <div className="side-bar__weather">
      <img src={imagesObject[weather_state_abbr]} alt="weather images" />
      <h2 className="title title__temper title-lg">
        {parseInt(+the_temp)} <span>℃</span>
      </h2>
      <h3 className="title title-md title-second-color">
        {weather_state_name}
      </h3>
    </div>
  );
}
