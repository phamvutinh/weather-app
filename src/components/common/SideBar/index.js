import React, { useState } from "react";
import ReactLoading from "react-loading";
import "./style.scss";
import Weather from "./weather";
import Button from "../Button";
import Menu from "../Menu";
import Circle from "../Circle";
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
  const { loading } = React.useContext(GlobalContext);

  return (
    <div className="side-bar">
      <Menu active={activeMenu} handleClose={setActiveMenu} />
      <div className="side-bar__search">
        <Button onClick={setActiveMenu} title="Search for places" />
        <Circle />
      </div>
      {!loading && weather_state_abbr ? (
        <>
          <Weather
            weather_state_abbr={weather_state_abbr}
            the_temp={the_temp}
            weather_state_name={weather_state_name}
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <ReactLoading width="30%" type="spinningBubbles" />
        </div>
      )}
    </div>
  );
}
