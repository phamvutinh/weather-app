import React from "react";

export default function Weather() {
  return (
    <div className="side-bar__weather">
      <img
        src={require("../../../assets/images/Shower.png")}
        alt="weather images"
      />
      <h2 className="title title__temper title-lg">
        15 <span>℃</span>
      </h2>
      <h3 className="title title-md title-second-color">Shower</h3>
    </div>
  );
}
