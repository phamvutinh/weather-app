import React from "react";
import { imagesObject } from "../../../utils/objectFreeze";
import { convertDegree } from "../../../utils";

export default function Weather({
  the_temp,
  weather_state_name,
  weather_state_abbr,
  unit,
}) {
  return (
    <div className="side-bar__weather">
      <img src={imagesObject[weather_state_abbr]} alt="weather images" />
      <h2 className="title title__temper title-lg">
        {convertDegree(the_temp, unit)}
      </h2>
      <h3 className="title title-md title-second-color">
        {weather_state_name}
      </h3>
    </div>
  );
}
