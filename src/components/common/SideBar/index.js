import React, { useState } from "react";
import "./style.scss";
import Weather from "./weather";
import Button from "../Button";
import Menu from "../Menu";
import Circle from "../Circle";
import Loading from "../Loading";
import { convertDate } from "../../../utils";
import { GlobalContext } from "../../../context/GlobalState";

export default function SideBar({
  the_temp,
  weather_state_name,
  weather_state_abbr,
  applicable_date,
  titleCity,
}) {
  const [activeMenu, setActiveMenu] = useState(false);
  const { loading, setLocation, unit } = React.useContext(GlobalContext);

  return (
    <div className="side-bar">
      <Menu active={activeMenu} handleClose={setActiveMenu} />
      <div className="side-bar__search">
        <Button onClick={setActiveMenu} title="Search for places" />
        <Circle
          onClick={() => {
            setLocation();
          }}
        />
      </div>
      {!loading && weather_state_abbr ? (
        <>
          <Weather
            weather_state_abbr={weather_state_abbr}
            the_temp={the_temp}
            weather_state_name={weather_state_name}
            unit={unit}
          />
          <div className="side-bar__footer">
            <p>Today • {convertDate(applicable_date)}</p>
            <div className="side-bar__footer-address">
              <span className="material-icons">room</span>
              <span>{titleCity}</span>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
