import React from "react";
import "./style.scss";

const Input = React.forwardRef(({ containerStyle, ...props }, ref) => (
  <div className="input" style={containerStyle}>
    <span className="material-icons">search</span>
    <input ref={ref} type="text" placeholder="Search location" {...props} />
  </div>
));

export default Input;
