import React from "react";
import "./style.scss";

export default function Button({ title, onClick, ...props }) {
  function handleClick() {
    if (onClick) {
      onClick(true);
    }
  }
  return (
    <button onClick={handleClick} className="button" {...props}>
      {title}
    </button>
  );
}
