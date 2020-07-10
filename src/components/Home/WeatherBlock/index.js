import React from "react";
import "./style.scss";
import { imagesObject } from "../../../utils/objectFreeze";
import { convertDate } from "../../../utils";

export default function WeatherBlock({
  max_temp,
  min_temp,
  weather_state_abbr,
  applicable_date,
}) {
  return (
    <div className="weather">
      <div className="weather__title">
        <h5>{convertDate(applicable_date)}</h5>
      </div>
      <div className="weather__img">
        <img src={imagesObject[weather_state_abbr]} alt="" />
      </div>
      <div className="weather__status">
        <div className="weather__status-max">{parseInt(+max_temp)}°C</div>
        <div className="weather__status-min">{parseInt(+min_temp)}°C</div>
      </div>
    </div>
  );
}
