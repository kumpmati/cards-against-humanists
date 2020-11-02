import React from "react";
import "./Button.css";

function Button({ text, onClick, disabled, ...extraClasses }) {
  let classes = "button";
  if (disabled) classes += " disabled";

  // extra classes
  if (extraClasses.outline) classes += " outline";
  if (extraClasses.inverse) classes += " inverse";
  if (extraClasses.big) classes += " big";
  if (extraClasses.padded) classes += " padded";

  return (
    <div className={classes} onClick={!disabled ? onClick : () => null}>
      <p>{text}</p>
    </div>
  );
}

export default Button;
