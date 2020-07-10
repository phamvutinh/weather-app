import React from "react";
import { Circle, WeatherBlock, Loading } from "../../components";
import { GlobalContext } from "../../context/GlobalState";
import HightLightBlock from "../../components/Home/HightLightBlock";
import "./style.scss";

export default function Home({ listWeather, today }) {
  const { loading, setUnit, unit } = React.useContext(GlobalContext);
  return !loading && listWeather.length ? (
    <div className="container">
      <div className="wrapper-circle">
        <Circle
          onClick={() => {
            setUnit("C");
          }}
          style={{
            backgroundColor: "#E7E7EB",
            color: "#110E3C",
          }}
          content="℃"
        />
        <Circle
          onClick={() => {
            setUnit("F");
          }}
          style={{
            backgroundColor: "#585676",
            color: "#E7E7EB",
            marginLeft: "12px",
          }}
          content="℉"
        />
      </div>
      <div className="new-weather">
        {listWeather.length ? (
          listWeather.map(
            (weather, index) =>
              index > 0 && (
                <WeatherBlock {...weather} unit={unit} key={weather.id} />
              )
          )
        ) : (
          <Loading />
        )}
      </div>
      <div className="hightlight">
        <h2>Today’s Hightlights</h2>
        <div className="hightlight__content">
          <HightLightBlock
            count={today.wind_speed}
            isWsw
            title="Wind status"
            unit="mph"
          />
          <HightLightBlock
            hasProgress
            title="Humidity"
            count={today.humidity}
            unit="%"
          />
          <HightLightBlock
            title="Visibility"
            count={today.visibility}
            unit="miles"
          />
          <HightLightBlock
            title="Air Pressure"
            count={today.air_pressure}
            unit="mb"
          />
        </div>
      </div>
    </div>
  ) : (
    <Loading width="10%" />
  );
}
