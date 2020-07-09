import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Input from "../Input";
import Button from "../Button";
import ListLink from "./ListLink";

export default function Menu({ active, handleClose }) {
  function close() {
    if (handleClose) {
      handleClose(false);
    }
  }
  return (
    <div className={`menu ${active ? "active" : ""}`}>
      <div className="menu__wrapper">
        <div onClick={close} className="menu__close">
          <span className="material-icons">close</span>
        </div>
        <div className="menu__search">
          <Input containerStyle={{ width: "80%" }} />
          <Button title="Search" style={{ backgroundColor: "#3C47E9" }} />
        </div>
        <div className="menu__list">
          <ListLink />
        </div>
      </div>
    </div>
  );
}

Menu.propTypes = {
  active: PropTypes.bool,
};
Menu.defaultProps = {
  active: false,
};
