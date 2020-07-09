import React from "react";
import "./style.scss";

export default function Input({ containerStyle, ...props }) {
  return (
    <div className="input" style={containerStyle}>
      <span className="material-icons">search</span>
      <input type="text" placeholder="Search location" {...props} />
    </div>
  );
}
