import React from "react";
import ReactLoading from "react-loading";
import "./style.scss";

export default function Loading({ ...props }) {
  return (
    <div className="loading">
      <ReactLoading width="30%" type="spinningBubbles" {...props} />
    </div>
  );
}
