import React from "react";
import "./style.scss";

export default function WeatherBlock() {
  return (
    <div className="weather">
      <div className="weather__title">
        <h5>Tomorrow</h5>
      </div>
      <div className="weather__img">
        <img src={require("../../../assets/images/Sleet.png")} alt="" />
      </div>
      <div className="weather__status">
        <div className="weather__status-max">16°C</div>
        <div className="weather__status-min">11°C</div>
      </div>
    </div>
  );
}
