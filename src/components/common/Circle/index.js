import React from "react";
import "./style.scss";

export default function Circle({ content, icon, ...props }) {
  return (
    <div className="circle" {...props}>
      {content ? (
        content
      ) : (
        <span className="material-icons">{icon ? icon : "gps_fixed"}</span>
      )}
    </div>
  );
}
