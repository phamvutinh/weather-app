import React from "react";
import "./style.scss";

export default function StatusBar() {
  return (
    <div className="status-bar">
      <div className="status-bar__progress">
        <div className="status-bar__unit">
          <span>0</span>
          <span>50</span>
          <span>100</span>
        </div>
        <div className="status-bar__progress-main"></div>
        <div className="status-bar__progress-sub"></div>
      </div>
    </div>
  );
}
