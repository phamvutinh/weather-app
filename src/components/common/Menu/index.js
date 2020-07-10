import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import Input from "../Input";
import Button from "../Button";
import ListLink from "./ListLink";
import { GlobalContext } from "../../../context/GlobalState";

export default function Menu({ active, handleClose }) {
  const { addWoeid, woeid, cities, searchByText } = useContext(GlobalContext);
  const inputRef = React.useRef();

  function close() {
    if (handleClose) {
      handleClose(false);
    }
  }

  function handleClick() {
    searchByText(inputRef.current.value);
  }

  return (
    <div className={`menu ${active ? "active" : ""}`}>
      <div className="menu__wrapper">
        <div onClick={close} className="menu__close">
          <span className="material-icons">close</span>
        </div>
        <div className="menu__search">
          <Input ref={inputRef} containerStyle={{ width: "80%" }} />
          <Button
            onClick={handleClick}
            title="Search"
            style={{ backgroundColor: "#3C47E9" }}
          />
        </div>
        <div className="menu__list">
          <ListLink
            handleClose={close}
            cities={cities}
            woeid={woeid}
            addWoeid={addWoeid}
          />
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
