import React from "react";
import "./Button.css";

function Button({ text, onClick, ...extraClasses }) {
  let classes = "button";
  if (extraClasses.outline) classes += " outline";
  if (extraClasses.inverse) classes += " inverse";
  if (extraClasses.big) classes += " big";

  return (
    <div className={classes} onClick={onClick}>
      <p>{text}</p>
    </div>
  );
}

export default Button;
