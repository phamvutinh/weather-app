import React, { useState } from "react";
import "./style.scss";
import Weather from "./weather";
import Button from "../Button";
import Menu from "../Menu";
import Circle from "../Circle";

export default function SideBar() {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <div className="side-bar">
      <Menu active={activeMenu} handleClose={setActiveMenu} />
      <div className="side-bar__search">
        <Button onClick={setActiveMenu} title="Search for places" />
        <Circle />
      </div>
      <Weather />
      <div className="side-bar__footer">
        <p>Today • Fri, 5 Jun</p>
        <div className="side-bar__footer-address">
          <span className="material-icons">room</span>
          <span>Helsinki</span>
        </div>
      </div>
    </div>
  );
}
