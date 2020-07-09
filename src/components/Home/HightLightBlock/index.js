import React from "react";
import "./style.scss";
import { Circle, StatusBar } from "../../common";

function HightLightBlock({ title, count, unit, isWsw, hasProgress }) {
  return (
    <div className="hightlight-block">
      <h3>{title}</h3>
      <h2>
        {count}
        <span>{unit}</span>
      </h2>
      {isWsw && (
        <div className="hightlight-block__wsw">
          <Circle icon="near_me" />
          <p>WSW</p>
        </div>
      )}
      {hasProgress && (
        <div className="hightlight-block__progress">
          <StatusBar />
        </div>
      )}
    </div>
  );
}
export default React.memo(HightLightBlock);
