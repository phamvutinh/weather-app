import React from "react";
import "./style.scss";
import { Circle, WeatherBlock } from "../../components";
import HightLightBlock from "../../components/Home/HightLightBlock";

export default function Home() {
  return (
    <div className="container">
      <div className="wrapper-circle">
        <Circle
          style={{ backgroundColor: "#E7E7EB", color: "#110E3C" }}
          content="℃"
        />
        <Circle
          style={{
            backgroundColor: "#585676",
            color: "#E7E7EB",
            marginLeft: "12px",
          }}
          content="℉"
        />
      </div>
      <div className="new-weather">
        {/* {places.consolidated_weather
          ? places.consolidated_weather.map((weather) => (
              <WeatherBlock {...weather} key={weather.id} />
            ))
          : "Loading"} */}
      </div>
      <div className="hightlight">
        <h2>Today’s Hightlights</h2>
        <div className="hightlight__content">
          <HightLightBlock isWsw title="Wind status" count="7" unit="mph" />
          <HightLightBlock hasProgress title="Humidity" count="84" unit="%" />
          <HightLightBlock title="Visibility" count="6,44" unit="miles" />
          <HightLightBlock title="Air Pressure" count="998" unit="mb" />
        </div>
      </div>
    </div>
  );
}
